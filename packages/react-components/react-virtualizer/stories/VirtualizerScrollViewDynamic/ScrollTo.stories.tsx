import * as React from 'react';
import { VirtualizerScrollViewDynamic } from '@fluentui/react-components/unstable';
import { Button, makeStyles } from '@fluentui/react-components';
import { useEffect } from 'react';
import { useImperativeScrolling } from '../../src/hooks/useImperativeScrolling';

const useStyles = makeStyles({
  child: {
    lineHeight: '42px',
    width: '100%',
    minHeight: '42px',
  },
});

export const ScrollTo = () => {
  const styles = useStyles();
  const childLength = 1000;
  const minHeight = 42;
  // Array size ref stores a list of random num for div sizing and callbacks
  const arraySize = React.useRef<number[]>(new Array<number>(childLength).fill(minHeight));
  // totalSize flag drives our callback update
  const [totalSize, setTotalSize] = React.useState<number>(minHeight * childLength);

  useEffect(() => {
    let _totalSize = 0;
    for (let i = 0; i < childLength; i++) {
      arraySize.current[i] = Math.random() * 250 + minHeight;
      _totalSize += arraySize.current[i];
    }
    setTotalSize(_totalSize);
  }, []);

  const getItemSizeCallback = React.useCallback(
    (index: number) => {
      return arraySize.current[index];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [arraySize, totalSize],
  );

  /* Imperative scrolling hooks */

  const scrollCallbacks = useImperativeScrolling();

  const scrollToRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * childLength);
    if (scrollCallbacks.scrollToItem.current) {
      console.log('Scrolling to random index: ', randomIndex);
      scrollCallbacks.scrollToItem.current(randomIndex);
    }
  };

  const reachedIndexCallback = (index: number) => {
    console.log('Reached index: ', index);
  };

  scrollCallbacks.didScrollToItem.current = reachedIndexCallback;

  return (
    <div>
      <Button onClick={scrollToRandomIndex}>{'GoTo:Random'}</Button>
      <VirtualizerScrollViewDynamic
        numItems={childLength}
        itemSize={100}
        getItemSize={getItemSizeCallback}
        container={{ role: 'list', style: { maxHeight: '100vh' } }}
        scrollCallbacks={scrollCallbacks}
      >
        {(index: number) => {
          const backgroundColor = index % 2 ? '#FFFFFF' : '#ABABAB';
          return (
            <div
              role={'listitem'}
              aria-posinset={index}
              aria-setsize={childLength}
              key={`test-virtualizer-child-${index}`}
              className={styles.child}
              style={{ minHeight: arraySize.current[index], backgroundColor }}
            >{`Node-${index} - size: ${arraySize.current[index]}`}</div>
          );
        }}
      </VirtualizerScrollViewDynamic>
    </div>
  );
};
