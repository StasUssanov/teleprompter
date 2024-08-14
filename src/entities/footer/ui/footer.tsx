import React from 'react';
import { Flex } from 'antd';
import { useStyle } from './footer.use-style';

export type FooterProps = {
  slots?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  }
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { styles: s } = useStyle();

  return (
    <Flex
      className={s.root}
      align={'center'}
      gap={'small'}
    >
      {props.slots?.left}
      <div className={s.center}>
        &copy;{new Date().getFullYear()} Teleprompter
      </div>
      {props.slots?.right}
    </Flex>
  );
};
