import React from 'react';
import { Affix, Layout as AntLayout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const {
  Header,
  Sider,
  Content,
  Footer
} = AntLayout;

export type LayoutProps = React.PropsWithChildren<{
  classNames?: {
    header?: string;
    footer?: string;
    leftSider?: string;
    rightSider?: string;
    body?: string;
    content?: string;
  };
  slots?: {
    header?: React.ReactNode | null;
    titlePage?: React.ReactNode;
    leftSider?: React.ReactNode;
    rightSider?: React.ReactNode;
    footer?: React.ReactNode;
  }
}>

export const Layout: React.FC<LayoutProps> = (props) => {
  const { leftSiderCollapsed, rightSiderCollapsed } = useSelector((state: RootState) => state.layout);

  return (
    <AntLayout>
      {props.slots?.header && (
        <Affix>
          <Header className={props.classNames?.header}>
            {props.slots.header}
          </Header>
        </Affix>
      )}
      {props.slots?.titlePage}
      <AntLayout className={props.classNames?.body}>
        {props.slots?.leftSider && (
          <Sider
            className={props.classNames?.leftSider}
            theme={'light'}
            trigger={null}
            collapsible={true}
            collapsed={leftSiderCollapsed}
          >
            {props.slots.leftSider}
          </Sider>
        )}
        <Content className={props.classNames?.content}>
          {props.children}
        </Content>
        {props.slots?.rightSider && (
          <Sider
            className={props.classNames?.rightSider}
            theme={'light'}
            trigger={null}
            collapsible={true}
            collapsed={rightSiderCollapsed}
          >
            {props.slots.rightSider}
          </Sider>
        )}
      </AntLayout>
      {props.slots?.footer && (
        <Footer className={props.classNames?.footer}>
          {props.slots.footer}
        </Footer>
      )}
    </AntLayout>
  );
};
