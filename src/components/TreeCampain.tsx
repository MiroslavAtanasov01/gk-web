// components/TreeView.tsx
"use client";

import React, { useState } from "react";

// --- TypeScript Interfaces ---
export interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
  [key: string]: any; // Allows for other custom properties
}

export interface TreeViewProps {
  data: TreeNodeData[];
  title?: string;
  initialExpandedIds?: string[];
  className?: string;
}

// Props for the internal RecursiveTreeNode component
interface RecursiveTreeNodeProps {
  node: TreeNodeData;
  level: number;
  isLastChildInParent: boolean;
  parentHasSiblingAfter: boolean; // If the parent of this node has siblings after it
  // Functions passed down from TreeView
  isNodeExpanded: (nodeId: string) => boolean;
  handleToggle: (nodeId: string) => void;
}

// --- Main TreeView Component ---
const TreeView: React.FC<TreeViewProps> = ({
  data,
  title,
  initialExpandedIds = [],
  className = "",
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(initialExpandedIds),
  );

  const handleToggle = (nodeId: string): void => {
    setExpandedIds((prevExpandedIds) => {
      const newExpandedIds = new Set(prevExpandedIds);
      if (newExpandedIds.has(nodeId)) {
        newExpandedIds.delete(nodeId);
      } else {
        newExpandedIds.add(nodeId);
      }
      return newExpandedIds;
    });
  };

  const isNodeExpanded = (nodeId: string): boolean => expandedIds.has(nodeId);

  // --- Recursive TreeNode Component ---
  const RecursiveTreeNode: React.FC<RecursiveTreeNodeProps> = ({
    node,
    level,
    isLastChildInParent,
    // parentHasSiblingAfter, // Can be used for more complex line drawing
    isNodeExpanded,
    handleToggle,
  }) => {
    const hasChildren = node.children && node.children.length > 0;
    const currentIsExpanded = isNodeExpanded(node.id);

    // Calculate the left offset for lines based on level
    // 20px per level for general structure, +9px to center on a 12px icon with 3px spacing
    const lineLeftOffset = (levelValue: number): string =>
      `${levelValue * 20 + 9}px`;

    // Padding for the node content itself (icon + label)
    const contentPaddingLeft = `${level * 24}px`; // e.g., 24px per level for indentation

    return (
      <li
        className="tree-node relative"
        role="treeitem"
        aria-expanded={hasChildren ? currentIsExpanded : undefined}
      >
        <div
          className="tree-node-content flex items-center py-1 cursor-pointer hover:bg-gray-100 rounded"
          style={{ paddingLeft: contentPaddingLeft }}
          onClick={() => hasChildren && handleToggle(node.id)}
        >
          {/* Vertical line connecting from parent */}
          {level > 0 && (
            <span
              className="absolute top-0 w-px bg-gray-300" // Line color
              style={{
                left: lineLeftOffset(level - 1),
                // Line extends half-way if it's the last child and not expanded, otherwise full height
                height:
                  isLastChildInParent && !currentIsExpanded ? "50%" : "100%",
              }}
            ></span>
          )}

          {/* Horizontal connector line from vertical line to the node's icon/content area */}
          {level > 0 && (
            <span
              className="absolute top-1/2 w-[15px] h-px bg-gray-300 -translate-y-1/2" // Connector line width
              style={{
                left: lineLeftOffset(level - 1),
              }}
            ></span>
          )}

          {/* Icon and Label container */}
          <div className="flex items-center relative z-10 bg-white pr-2">
            {/* ^ z-10 and bg-white ensures this content sits above the lines and masks them */}
            {hasChildren ? (
              <button
                aria-label={currentIsExpanded ? "Collapse" : "Expand"}
                // Ensure 'bg-secondary' is a defined color in your Tailwind config (e.g., theme.extend.colors.secondary)
                className="bg-secondary hover:bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-sm text-xs mr-2 flex-shrink-0"
                // onClick is handled by the parent div for simplicity
              >
                {currentIsExpanded ? "-" : "+"}
              </button>
            ) : (
              // Placeholder for alignment when no children, matches button width
              <span className="inline-block w-5 mr-2 flex-shrink-0"></span>
            )}
            <span className="select-none text-sm text-gray-700">
              {node.label}
            </span>
          </div>
        </div>

        {/* Render children if any and if the node is expanded */}
        {hasChildren && currentIsExpanded && (
          <ul role="group" className="tree-node-children">
            {node.children?.map((childNode, index) => (
              <RecursiveTreeNode
                key={childNode.id}
                node={childNode}
                level={level + 1}
                isLastChildInParent={index === (node.children?.length ?? 0) - 1}
                parentHasSiblingAfter={index < (node.children?.length ?? 0) - 1}
                isNodeExpanded={isNodeExpanded}
                handleToggle={handleToggle}
              />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className={`tree-view-container bg-white ${className}`}>
      {title && (
        <h2 className="text-md font-semibold mb-2 text-gray-800">{title}</h2>
      )}
      {/* Scrollable area with custom scrollbar class */}
      <div className="custom-scrollbar max-h-[400px] overflow-y-auto pr-1">
        <ul role="tree" className="space-y-0">
          {" "}
          {/* space-y-0 to prevent extra space between li items */}
          {data.map((rootNode, index) => (
            <RecursiveTreeNode
              key={rootNode.id}
              node={rootNode}
              level={0}
              isLastChildInParent={index === data.length - 1}
              parentHasSiblingAfter={index < data.length - 1}
              isNodeExpanded={isNodeExpanded}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TreeView;
