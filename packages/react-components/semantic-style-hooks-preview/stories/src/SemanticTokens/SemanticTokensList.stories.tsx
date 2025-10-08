import * as React from 'react';
import * as SemanticTokens from '@fluentui/semantic-tokens';
import { List, ListItem, makeStyles, Text, Input, RadioGroup, Radio } from '@fluentui/react-components';

const useTextStyle = makeStyles({
  primitive: {
    color: 'gray',
  },
  group: {
    color: 'blue',
  },
  control: {
    color: 'purple',
  },
  generic: {
    color: 'green',
  },
});

export const SemanticTokensList = () => {
  const textStyles = useTextStyle();
  const getTokenType = (tokenValue: string) => {
    if (tokenValue.includes('_')) {
      return 'primitive';
    } else if (tokenValue.includes('group')) {
      return 'group';
    } else if (tokenValue.includes('ctrl')) {
      return 'control';
    } else {
      return 'generic';
    }
  };

  const getTokenStyle = (tokenValue: string) => {
    const type = getTokenType(tokenValue);
    switch (type) {
      case 'primitive':
        return textStyles.primitive;
      case 'group':
        return textStyles.group;
      case 'control':
        return textStyles.control;
      default:
        return textStyles.generic;
    }
  };

  const getTokenList = (tokenType: string) => {
    const tokens = Object.entries(SemanticTokens);
    if (tokenType === 'all') {
      return tokens;
    } else {
      return tokens.filter(([tokenName]) => getTokenType(tokenName) === tokenType);
    }
  };

  const [filter, setFilter] = React.useState('');
  const [tokenType, setTokenType] = React.useState('all');
  const filteredTokens = getTokenList(tokenType).filter(([tokenName]) =>
    tokenName.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log('Filter:', filter);

  return (
    <div>
      <RadioGroup value={tokenType} onChange={(ev, data) => setTokenType(data.value)} layout="horizontal">
        <Radio value="all" label="All" />
        <Radio value="primitive" label="Primitives" />
        <Radio value="generic" label="Generics" />
        <Radio value="group" label="Groups" />
        <Radio value="control" label="Controls" />
      </RadioGroup>
      <Input value={filter} onChange={e => setFilter(e.target.value)} />
      <Text>{filteredTokens.length} tokens</Text>
      <List>
        {filteredTokens.map(([tokenName]) => (
          <ListItem key={tokenName}>
            <Text className={getTokenStyle(tokenName)}>{tokenName}</Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

SemanticTokensList.parameters = {
  docs: {
    description: {},
  },
};
