import * as React from 'react';
import { VirtualizerScrollView } from '@fluentui/react-components/unstable';
import { Button, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  child: {
    height: '100px',
    lineHeight: '100px',
    width: '100%',
  },
});

export const Reversed = () => {
  const styles = useStyles();
  const childLength = 1000;

  return (
    <VirtualizerScrollView
      numItems={childLength}
      itemSize={100}
      reversed
      container={{ role: 'list', style: { maxHeight: '100vh' } }}
    >
      {index => {
        return (
          <span
            role={'listItem'}
            aria-posinset={index}
            aria-setsize={childLength}
            key={`test-virtualizer-child-${index}`}
            id={`test-virtualizer-child-${index}`}
            className={styles.child}
          >
            <Button>{`Node-${index}`}</Button>
          </span>
        );
      }}
    </VirtualizerScrollView>
  );
};
