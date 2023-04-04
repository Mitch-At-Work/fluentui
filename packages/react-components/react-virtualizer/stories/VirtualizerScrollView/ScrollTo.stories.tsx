import * as React from 'react';
import { VirtualizerScrollView } from '@fluentui/react-components/unstable';
import { makeStyles } from '@fluentui/react-components';
import { useImperativeScrolling } from '../../src/hooks/useImperativeScrolling';
import { Button } from '@fluentui/react-components';
const useStyles = makeStyles({
  child: {
    height: '100px',
    lineHeight: '100px',
    width: '100%',
  },
});

export const ScrollTo = () => {
  const styles = useStyles();
  const childLength = 1000;
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
      <VirtualizerScrollView
        numItems={childLength}
        itemSize={100}
        container={{ role: 'list', style: { maxHeight: '100vh' } }}
        scrollCallbacks={scrollCallbacks}
      >
        {(index: number) => {
          return (
            <div
              role={'listitem'}
              aria-posinset={index}
              aria-setsize={childLength}
              key={`test-virtualizer-child-${index}`}
              className={styles.child}
            >{`Node-${index}`}</div>
          );
        }}
      </VirtualizerScrollView>
    </div>
  );
};
