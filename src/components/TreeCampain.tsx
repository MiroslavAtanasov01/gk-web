// components/TreeView.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TreeNode = ({
  node,
  level,
  isExpanded,
  onToggle,
  isLastChild,
  hasSiblingAfter,
}) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li
      className="tree-node relative"
      role="treeitem"
      aria-expanded={hasChildren ? isExpanded : undefined}
    ></li>
  );
};

// --- Main TreeView Component ---
const TreeView = ({ data, title, initialExpandedIds = [], className = "" }) => {
  const [expandedIds, setExpandedIds] = useState(new Set(initialExpandedIds));

  const handleToggle = (nodeId) => {
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

  // Helper function to pass to TreeNode for child expansion state
  const isNodeExpanded = (nodeId) => expandedIds.has(nodeId);

  // --- Recursive TreeNode (modified to use isNodeExpanded) ---
  const RecursiveTreeNode = ({
    node,
    level,
    isLastChildInParent,
    parentHasSiblingAfter,
  }) => {
    const hasChildren = node.children && node.children.length > 0;
    const currentIsExpanded = isNodeExpanded(node.id);

    // Calculate the left offset for lines based on level
    // Each level adds 20px. The line connects to the center of the 12px icon (6px) + 3px space = 9px offset from level start.
    const lineLeftOffset = (levelValue) => `${levelValue * 20 + 9}px`;

    return (
      <li
        className="tree-node relative"
        role="treeitem"
        aria-expanded={hasChildren ? currentIsExpanded : undefined}
      >
        <div
          className="tree-node-content flex items-center py-1 cursor-pointer hover:bg-gray-100 rounded"
          style={{ paddingLeft: `${level * 24}px` }} // Indentation
          onClick={() => hasChildren && handleToggle(node.id)}
        >
          {/* Vertical line coming from parent (for levels > 0) */}
          {level > 0 && (
            <span
              className="absolute top-0 w-px bg-gray-400" // Line color
              style={{
                left: lineLeftOffset(level - 1),
                height:
                  isLastChildInParent && !currentIsExpanded ? "50%" : "100%", // Stop at midpoint if last and not expanded
                // If this node's parent has siblings after it, the line needs to continue past this node
                // This logic is complex and better handled by individual line segments for each node.
                // For simplicity, this line extends fully unless it's the absolute last item visually.
              }}
            ></span>
          )}

          {/* Horizontal connector line */}
          {level > 0 && (
            <span
              className="absolute top-1/2 w-[15px] h-px bg-gray-400 -translate-y-1/2" // Line color, width of connector
              style={{
                left: lineLeftOffset(level - 1),
              }}
            ></span>
          )}

          {/* Icon and Label - z-10 ensures it's above the lines */}
          <div className="flex items-center relative z-10 bg-white pr-2">
            {" "}
            {/* bg-white to mask line behind icon/text */}
            {hasChildren ? (
              currentIsExpanded ? (
                <div>
                  {" "}
                  <button className="bg-secondary h-5 w-5 text-white">-</button>
                </div>
              ) : (
                <div>
                  {" "}
                  <button className="bg-secondary h-5 w-5 text-white text-center">
                    +
                  </button>
                </div>
              )
            ) : (
              // Placeholder for alignment if no children, to keep text aligned
              <span className="inline-block w-[12px] mr-2 flex-shrink-0"></span>
            )}
            <span className="select-none text-sm text-gray-700">
              {node.label}
            </span>
          </div>
        </div>

        {hasChildren && currentIsExpanded && (
          <ul role="group" className="tree-node-children">
            {node.children.map((childNode, index) => (
              <RecursiveTreeNode
                key={childNode.id}
                node={childNode}
                level={level + 1}
                isLastChildInParent={index === node.children.length - 1}
                parentHasSiblingAfter={!isLastChildInParent} // This prop isn't fully utilized in the current line logic but can be useful
              />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className={`tree-view-container  bg-white ${className}`}>
      {title && (
        <h2 className="text-md font-semibold mb-2 text-gray-800">{title}</h2>
      )}
      <div className="custom-scrollbar max-h-[400px] overflow-y-auto pr-1">
        {" "}
        {/* Scrollable area */}
        <ul role="tree" className="space-y-0">
          {data.map((rootNode, index) => (
            <RecursiveTreeNode
              key={rootNode.id}
              node={rootNode}
              level={0}
              isLastChildInParent={index === data.length - 1}
              parentHasSiblingAfter={index < data.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TreeView;
