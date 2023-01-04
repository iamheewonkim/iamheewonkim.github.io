import React, { useCallback, useRef } from 'react';
import { rhythm } from '../../utils/typography';
import Item from './item';
import { CategoryContainer } from './index.style';

function Category({ categories, category, selectCategory }) {
  const containerRef = useRef<HTMLUListElement>(null!);

  const scrollToCenter = useCallback(
    tabRef => {
      const { offsetWidth: tabWidth } = tabRef.current;
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current;
      const tabLeft = tabRef.current.getBoundingClientRect().left;
      const containerLeft = containerRef.current!!.getBoundingClientRect().left;
      const refineLeft = tabLeft - containerLeft;
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2;

      containerRef.current!!.scroll({
        left: targetScollX,
        top: 0,
        behavior: 'smooth',
      });
    },
    [containerRef]
  );

  return (
    <CategoryContainer
      ref={containerRef}
      className="category-container"
      role="tablist"
      id="category"
      style={{
        margin: `0 -${rhythm(3 / 4)}`,
      }}
    >
      <Item
        title={'All'}
        selectedCategory={category}
        onClick={selectCategory}
        scrollToCenter={scrollToCenter}
      />
      {categories.map((title, idx) => (
        <Item
          key={idx}
          title={title}
          selectedCategory={category}
          onClick={selectCategory}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </CategoryContainer>
  );
}

export default Category;
