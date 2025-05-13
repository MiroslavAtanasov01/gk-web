"use client";

import React, { useState } from "react";

export interface TreeNodeData {
  id: string;
  label: string;
  children?: TreeNodeData[];
  [key: string]: any;
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
      >
        <div
          className="tree-node-content flex  py-1 cursor-pointer  rounded"
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
              className="absolute top-1/2 w-[15px] h-px bg-gray-300 -translate-y-1/2"
              style={{
                left: lineLeftOffset(level - 1),
              }}
            ></span>
          )}

          {/* Icon and Label container */}
          <div className="flex relative  bg-white pr-2">
            {hasChildren ? (
              <button
                aria-label={currentIsExpanded ? "Collapse" : "Expand"}
                className="bg-secondary hover:bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-sm text-xs mr-2 flex-shrink-0"
              >
                {currentIsExpanded ? "-" : "+"}
              </button>
            ) : (
              <span className=" w-5 "></span>
            )}
            <span className="select-none text-sm text-gray-700">
              {node.label}
            </span>
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
    <div className={` bg-white ${className}`}>
      {title && (
        <h2 className="text-md font-semibold mb-2 text-primary text-start">
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
