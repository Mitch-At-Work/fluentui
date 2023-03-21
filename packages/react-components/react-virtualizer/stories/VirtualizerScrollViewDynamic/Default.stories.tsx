import * as React from 'react';
import { VirtualizerScrollViewDynamic } from '@fluentui/react-components/unstable';
import { makeStyles } from '@fluentui/react-components';
import { ThemeProvider } from '@fluentui/react';
import { array } from 'yargs';
import { useEffect } from '@storybook/addons';

const useStyles = makeStyles({
  root: {
    maxHeight: '100vh',
  },
  child: {
    lineHeight: '42px',
    width: '100%',
    minHeight: '42px',
  },
});

export const Default = () => {
  const styles = useStyles();
  const childLength = 1000;
  const minHeight = 42;
  const arraySize = new Array<number>(childLength).fill(minHeight);

  useEffect(() => {
    for (let i = 0; i < childLength; i++) {
      arraySize[i] = Math.random() * 250 + minHeight;
    }
  }, [arraySize]);

  return (
    <ThemeProvider className={styles.root} applyTo="body">
      <VirtualizerScrollViewDynamic
        numItems={childLength}
        itemSize={100}
        getItemSize={index => {
          return arraySize[index];
        }}
        container={{ role: 'list', style: { maxHeight: '100vh' } }}
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
              style={{ minHeight: arraySize[index], backgroundColor }}
            >{`Node-${index} - size: ${arraySize[index]}`}</div>
          );
        }}
      </VirtualizerScrollViewDynamic>
    </ThemeProvider>
  );
};
