import React from 'react';
import { Typography } from 'antd';

export type PreObjectProps = {
  desc?: string;
  obj: object;
}

export const PreObject: React.FC<PreObjectProps> = (props) => {
  return (
    <Typography.Paragraph>
      {props.desc && (<span>{props.desc}: </span>)}
      <pre>{JSON.stringify(props.obj, null, 2)}</pre>
    </Typography.Paragraph>
  );
};
