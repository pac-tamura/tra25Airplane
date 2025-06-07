import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import type { GridItem } from './types';

// Windows XP style inline styles with proper typing
const styles: Record<string, CSSProperties> = {
  quizGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '8px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '5px',
  },
  quizGrid9x9: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gap: '4px',
    width: '100%',
    maxWidth: '800px', // Wider for 9x9 grid
    margin: '0 auto',
  },
  gridItem: {
    aspectRatio: '1 / 1',
    backgroundColor: '#FFFFFF',
    border: '1px solid #7A98AF',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '8px',
    fontSize: '20px', // Increased from 13px
    transition: 'all 0.2s ease',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F0F0 100%)', // XP gradient
    boxShadow: 'inset 0 0 1px #FFFFFF, 0 1px 2px rgba(0, 0, 0, 0.1)',  // XP inner glow
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Tahoma, "Segoe UI", sans-serif',
  },
  gridItem9x9: {
    padding: '3px',
    fontSize: '14px', // Increased from 11px
    border: '1px solid #7A98AF',
    borderRadius: '2px',
  },
  selectedItem: {
    backgroundColor: '#EFF8FF',
    borderColor: '#3D95FF',
    background: 'linear-gradient(to bottom, #EBF4FD 0%, #DCF0FF 100%)', // XP blue selection
    boxShadow: 'inset 0 0 1px #FFFFFF, 0 0 3px rgba(61, 149, 255, 0.5)',
    position: 'relative',
    color: '#003399',
  },
  // XP style selected item overlay (checkmark)
  selectedOverlay: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '12px', // Slightly larger
    height: '12px', // Slightly larger
    backgroundColor: '#3D95FF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '10px', // Increased from 8px
    fontWeight: 'bold',
  },
  disabledItem: {
    cursor: 'default',
    opacity: 0.7,
    background: 'linear-gradient(to bottom, #F8F8F8 0%, #E8E8E8 100%)',
    borderColor: '#BBBBBB',
  },
  gridItemImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain' as const, // Type assertion for object-fit
  },
};

interface QuizGridProps {
  gridItems: GridItem[];
  onSelectionChange: (selectedIds: string[]) => void;
  disabled?: boolean;
  size?: '3x3' | '9x9'; // Grid size control
  selectedItems?: string[]; // New prop to control selected items from parent
}

const QuizGrid: React.FC<QuizGridProps> = ({ 
  gridItems, 
  onSelectionChange, 
  disabled = false,
  size = '3x3', // Default to 3x3
  selectedItems = [] // Default to empty array
}) => {
  const [gridSize, setGridSize] = useState<number>(3); // Default to 3x3
  
  // Calculate grid size based on props and number of items
  useEffect(() => {
    if (size === '9x9') {
      setGridSize(9);
    } else {
      // If not specified, derive from the number of items (square root)
      const itemsCount = gridItems.length;
      const calculatedSize = Math.sqrt(itemsCount);
      // Round to the nearest integer, default to 3 if not a perfect square
      setGridSize(Number.isInteger(calculatedSize) ? calculatedSize : 3);
    }
  }, [gridItems.length, size]);

  const handleItemClick = (itemId: string) => {
    if (disabled) return;

    let newSelectedItems: string[];
    if (selectedItems.includes(itemId)) {
      // Deselect if already selected
      newSelectedItems = selectedItems.filter(id => id !== itemId);
    } else {
      // Select if not selected
      newSelectedItems = [...selectedItems, itemId];
    }

    onSelectionChange(newSelectedItems);
  };

  // Determine grid style based on size
  const gridStyle: CSSProperties = {
    ...styles.quizGrid,
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(gridItems.length / gridSize)}, 1fr)`,
  };
  
  // If 9x9, use more compact styling
  if (gridSize === 9) {
    Object.assign(gridStyle, styles.quizGrid9x9);
  }

  return (
    <div style={gridStyle}>
      {gridItems.map((item, index) => {
        const isSelected = selectedItems.includes(index.toString());
        const itemStyle: CSSProperties = {
          ...styles.gridItem,
          ...(gridSize === 9 ? styles.gridItem9x9 : {}),
          ...(isSelected ? styles.selectedItem : {}),
          ...(disabled ? styles.disabledItem : {}),
        };
        
        return (
          <div 
            key={index}
            style={itemStyle}
            onClick={() => handleItemClick(index.toString())}
            title={`オプション ${index + 1}`} // XP-style tooltip
          >
            {item.type === 'text' ? (
              <span>{item.content}</span>
            ) : (
              <img 
                src={item.content} 
                alt={`オプション ${index + 1}`} 
                style={styles.gridItemImage} 
              />
            )}
            
            {/* XP style selection indicator */}
            {isSelected && (
              <div style={styles.selectedOverlay}>?</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizGrid;