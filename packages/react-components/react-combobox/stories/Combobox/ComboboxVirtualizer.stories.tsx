import * as React from 'react';
import { Combobox, Option, makeStyles, useId } from '@fluentui/react-components';
import type { ComboboxProps } from '@fluentui/react-components';

import type { ScrollToInterface } from '@fluentui/react-components/unstable';
import { VirtualizerScrollView } from '@fluentui/react-components/unstable';

const useStyles = makeStyles({
  listbox: {
    maxHeight: '250px',
  },
  option: {
    height: '32px',
    minHeight: '32px',
  },
});

export const ComboboxVirtualizer = (props: Partial<ComboboxProps>) => {
  const comboId = useId('combobox');

  const itemHeight = 32; //This should match the height of each item in the listbox
  const numberOfItems = 10000;
  const scrollRef = React.useRef<ScrollToInterface>(null);

  const currentIndex = React.useRef(0);
  const styles = useStyles();

  const jumpTo = React.useCallback(() => {
    if (currentIndex.current >= 0) {
      setTimeout(() => {
        scrollRef.current?.scrollTo(currentIndex.current, 'instant', (index: number) => {
          console.log(`Reached index: ${index}`);
        });
      }, 1);
    }
  }, [scrollRef]);

  return (
    <div>
      <div>
        <label htmlFor={`${comboId}`}>Medium</label>
        <Combobox
          onOpenChange={jumpTo}
          id={`${comboId}`}
          placeholder="Select a number"
          listbox={{ className: styles.listbox }}
        >
          <VirtualizerScrollView
            container={{ role: 'list' }}
            imperativeRef={scrollRef}
            numItems={numberOfItems}
            itemSize={itemHeight}
          >
            {index => {
              return (
                <Option
                  className={styles.option}
                  aria-posinset={index}
                  aria-setsize={numberOfItems}
                  key={`item-${index}`}
                  onClick={() => {
                    currentIndex.current = index;
                  }}
                >{`Item ${index + 1}`}</Option>
              );
            }}
          </VirtualizerScrollView>
        </Combobox>
      </div>
    </div>
  );
};

ComboboxVirtualizer.parameters = {
  docs: {
    description: {
      story: 'A Combobox can use Virtualizer to display a large number of options.',
    },
  },
};
