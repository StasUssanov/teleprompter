import React, { useLayoutEffect, useRef, useState } from 'react';
import { MainLayout } from '../../../widgets/main-layout';
import { useStyle } from './player.use-style';
import { mockText } from './mock-text';
import { Button, InputNumber, InputNumberProps, Space, Typography } from 'antd';
import { useCounter, useEventListener, useInterval, useToggle } from 'usehooks-ts';
import { LeftOutlined, PauseCircleOutlined, PlayCircleOutlined, RedoOutlined, RightOutlined } from '@ant-design/icons';

let initCount: number = 0;

export const PlayerPage: React.FC = () => {
  const { styles: s } = useStyle();
  const refText = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState(20);
  const { count, setCount, increment, decrement } = useCounter(0);
  const [delay, setDelay] = useState(3000);
  const [isPlaying, toggle] = useToggle(false);

  useLayoutEffect(() => {
    handlerReset();
  }, [refText.current]);

  useEventListener('resize', () => handlerReset());

  useInterval(() => {
    if (count === 1) toggle();
    else handlerUpdatePosition('next');
  }, isPlaying ? delay : null);

  const handlerUpdatePosition = (type: 'next' | 'prev') => {
    if (type === 'next') {
      if (count > 1) {
        decrement();
      }
    } else {
      if (count < initCount) {
        increment();
      }
    }
  };

  const handlerReset = () => {
    if (refText.current?.clientHeight) {
      initCount = refText.current.clientHeight / (fontSize * 2);
      setCount(initCount);
    }
  };

  const handlerOnChangeFontSize: InputNumberProps['onChange'] = (value) => {
    setFontSize(value as number || 1);
    handlerReset();
  };

  const handlerOnChangeDelay: InputNumberProps['onChange'] = (value) => {
    setDelay(value as number || 1);
    handlerReset();
  };

  return (
    <MainLayout
      classNames={{
        content: s.root,
      }}
      options={{
        showHeader: false,
      }}
    >
      <div
        className={s.wrapper}
        style={{ fontSize }}
      >
        <div className={s.cursor}>
          <div
            ref={refText}
            className={s.text}
            style={{
              marginTop: `-${(initCount - count) * fontSize * 2}px`
            }}
          >
            {mockText}
          </div>
        </div>
      </div>
      <Space className={s.actions}>
        <Button
          icon={isPlaying ? <PauseCircleOutlined/> : <PlayCircleOutlined/>}
          onClick={toggle}
        />
        <Button
          icon={<RedoOutlined/>}
          onClick={handlerReset}
        />
        <Button
          icon={<LeftOutlined/>}
          onClick={() => handlerUpdatePosition('prev')}
        />
        <Button
          icon={<RightOutlined/>}
          onClick={() => handlerUpdatePosition('next')}
        />
        <InputNumber
          placeholder={'fontSize'}
          value={fontSize}
          min={1}
          onChange={handlerOnChangeFontSize}
        />
        <InputNumber
          placeholder={'delay'}
          value={delay}
          min={1}
          onChange={handlerOnChangeDelay}
        />
        <Typography.Text>
          count: {count}
        </Typography.Text>
      </Space>
    </MainLayout>
  );
};
