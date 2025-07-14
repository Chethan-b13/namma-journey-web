import { CardProps } from "@/types/DataTableTypes";
import React from "react";

const Card: React.FC<CardProps> = ({
  header,
  columns = [],
  columnCount = 1,
  footer,
}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-lg">
      {/* Card Header */}
      {header && (
        <h2 className="text-lg font-semibold text-gray-900">{header}</h2>
      )}
      <hr className="my-2" />

      {/* Dynamic Grid for Content */}
      <div className={`grid grid-cols-${columnCount} gap-4`}>
        {columns.map((item, index) => (
          <div key={index} className="flex items-center p-2 rounded-md">
            {/* Avatar & Text Content */}
            <div className="flex items-center gap-3">
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt={item.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}

              <div>
                {item.title && (
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                )}
                {item.subtitle && (
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                )}
                {item.content && (
                  <p className="text-xs text-gray-400">{item.content}</p>
                )}
              </div>
            </div>

            {/* Icons (if present) */}
            {item.icons && (
              <div className="flex gap-2">
                {item.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Card Footer */}
      {footer && <div className="mt-4 border-t pt-3">{footer}</div>}
    </div>
  );
};

export default Card;
