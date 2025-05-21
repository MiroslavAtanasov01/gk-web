"use client";

import React, { useState } from "react";

export interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
  [key: string]: unknown;
}

export interface TreeViewProps {
  data: TreeNodeData[];
  title?: string;
  initialExpandedIds?: string[];
  className?: string;
}

interface RecursiveTreeNodeProps {
  node: TreeNodeData;
  level: number;
  isLastChildInParent: boolean;
  parentHasSiblingAfter: boolean;
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
    isNodeExpanded,
    handleToggle,
  }) => {
    const hasChildren = node.children && node.children.length > 0;
    const currentIsExpanded = isNodeExpanded(node.id);

    const lineLeftOffset = (levelValue: number): string =>
      `${levelValue * 20 + 9}px`;

    const contentPaddingLeft = `${level * 20}px`; // e.g., 24px per level for indentation

    return (
      <li
        className="tree-node relative"
        role="treeitem"
        aria-expanded={hasChildren ? currentIsExpanded : undefined}
        aria-selected={false}
      >
        <div
          className="tree-node-content flex cursor-pointer rounded py-1"
          style={{ paddingLeft: contentPaddingLeft }}
          onClick={() => hasChildren && handleToggle(node.id)}
        >
          {level > 0 && (
            <span
              className="absolute top-0 w-px bg-gray-300"
              style={{
                left: lineLeftOffset(level - 1),
                height:
                  isLastChildInParent && !currentIsExpanded ? "50%" : "100%",
              }}
            ></span>
          )}

          {level > 0 && (
            <span
              className="absolute top-1/2 h-px w-[15px] -translate-y-1/2 bg-gray-300"
              style={{
                left: lineLeftOffset(level - 1),
              }}
            ></span>
          )}

          {/* Icon and Label container */}
          <div className="relative flex items-center bg-white pr-2">
            {hasChildren ? (
              <button
                aria-label={currentIsExpanded ? "Collapse" : "Expand"}
                className="bg-secondary text-md hover:bg-primary mr-2 flex h-3 w-3 flex-shrink-0 items-center justify-center text-white"
              >
                {currentIsExpanded ? "-" : "+"}
              </button>
            ) : (
              <span className="w-5"></span>
            )}
            <span className="text-xl text-black select-none">{node.label}</span>
          </div>
        </div>

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
    <div className={`bg-white ${className}`}>
      {title && (
        <h2 className="text-md text-primary mb-2 text-start text-xl font-semibold">
          {title}
        </h2>
      )}
      {/* Scrollable area with custom scrollbar class */}
      <div className="custom-scrollbar max-h-[400px] overflow-y-auto pr-1">
        <ul role="tree" className="space-y-0">
          {" "}
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
