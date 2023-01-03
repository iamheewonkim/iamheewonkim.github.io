import React, { useRef, useCallback, useEffect, RefObject } from 'react';

interface Props {
  title: string;
  selectedCategory: string;
  onClick: (input: string) => void;
  scrollToCenter: (input: React.RefObject<HTMLLIElement>) => void;
}

function Item({ title, selectedCategory, onClick, scrollToCenter }: Props) {
  const tabRef: RefObject<HTMLLIElement> = useRef(null);

  const handleClick = useCallback(() => {
    scrollToCenter(tabRef);
    onClick(title);
  }, [tabRef]);

  useEffect(() => {
    if (selectedCategory === title) {
      scrollToCenter(tabRef);
    }
  }, [selectedCategory, tabRef]);

  return (
    <li
      ref={tabRef}
      className="item"
      role="tab"
      aria-selected={selectedCategory === title ? 'true' : 'false'}
    >
      <div onClick={handleClick}>{title}</div>
    </li>
  );
}

export default Item;
