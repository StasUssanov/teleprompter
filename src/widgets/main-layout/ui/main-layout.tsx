import React from 'react';
import { Button, Flex, Space, Typography } from 'antd';
import { ArrowLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, LayoutProps } from '../../../entities/layout';
import { useStyle } from './main-layout.use-style';
import { useMainLayout } from '../model/use-main-layout';
import { Footer } from '../../../entities/footer';

// type Params = {
//   workspaceAlias?: string;
//   pointAlias?: string;
// }

export type MainLayoutProps = React.PropsWithChildren<{
  classNames?: LayoutProps['classNames'],
  slots?: {
    headerMenu?: React.ReactNode,
    leftSider?: React.ReactNode,
    rightSider?: React.ReactNode,
    titlePage?: React.ReactNode,
    hasButtonBack?: boolean,
    titlePageActions?: React.ReactNode[],
  },
  options?: {
    showHeader?: boolean;
  }
}>

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { styles: s, cx } = useStyle();
  const { leftSiderCollapsed, setLeftSiderCollapsed, hasButtonBack } = useMainLayout();
  // const router = useRouter();
  // const params = useParams<Params>();
  // const { workspaces } = useWorkspace();
  // const { points } = usePoint();

  // const workspace = workspaces.find(i => i.alias === params.workspaceAlias);
  // const point = points.find(i => i.alias === params.pointAlias);

  const headerSlotRender = (
    <>
      {/*<Flex gap={'small'}>*/}
      {/*  <div*/}
      {/*    className={s.logo}*/}
      {/*    onClick={() => {*/}
      {/*      // router.push('/');*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    LOGO*/}
      {/*  </div>*/}
      {/*  <Flex*/}
      {/*    className={s.headerLeft}*/}
      {/*    gap={'small'}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      type={'text'}*/}
      {/*      size={'small'}*/}
      {/*      icon={<AppstoreOutlined/>}*/}
      {/*      // onClick={() => router.push('/')}*/}
      {/*    />*/}
      {/*    /!*{(params.workspaceAlias && workspace) && (*!/*/}
      {/*    /!*  <Button*!/*/}
      {/*    /!*    type={'text'}*!/*/}
      {/*    /!*    size={'small'}*!/*/}
      {/*    /!*    // icon={<AppstoreOutlined/>}*!/*/}
      {/*    /!*    onClick={() => router.push(`/${params.workspaceAlias}`)}*!/*/}
      {/*    /!*  >*!/*/}
      {/*    /!*    {workspace.name}*!/*/}
      {/*    /!*  </Button>*!/*/}
      {/*    /!*)}*!/*/}
      {/*    /!*{(params.workspaceAlias && point) && (*!/*/}
      {/*    /!*  <Button*!/*/}
      {/*    /!*    type={'text'}*!/*/}
      {/*    /!*    size={'small'}*!/*/}
      {/*    /!*    // icon={<AppstoreOutlined/>}*!/*/}
      {/*    /!*    onClick={() => router.push(`/${params.workspaceAlias}/${params.pointAlias}`)}*!/*/}
      {/*    /!*  >*!/*/}
      {/*    /!*    {point.name}*!/*/}
      {/*    /!*  </Button>*!/*/}
      {/*    /!*)}*!/*/}
      {/*  </Flex>*/}
      {/*  /!*<ProfileButton/>*!/*/}
      {/*</Flex>*/}
      {/*{props.slots?.headerMenu}*/}
    </>
  );

  const titlePageRender = (
    <div className={s.titlePageWrapper}>
      <Flex
        className={s.titlePage}
        justify={'space-between'}
        align={'center'}
        gap={'middle'}
      >
        {(hasButtonBack || props.slots?.hasButtonBack) && (
          <Button
            icon={<ArrowLeftOutlined/>}
            type={'text'}
            shape={'circle'}
            // onClick={router.back}
          />
        )}
        {props.slots?.titlePage && (
          <Typography.Title
            level={3}
            style={{ flex: 1 }}
          >
            {props.slots?.titlePage}
          </Typography.Title>
        )}
        {props.slots?.titlePageActions && (
          <Space>
            {props.slots.titlePageActions}
          </Space>
        )}
      </Flex>
    </div>
  );

  const footerLeftSlotRender = (
    <Flex gap={'small'}>
      <Button
        type={'text'}
        icon={leftSiderCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        onClick={() => {
          setLeftSiderCollapsed(!leftSiderCollapsed);
        }}
      />
    </Flex>
  );

  return (
    <Layout
      classNames={{
        header: s.headerSlot,
        leftSider: cx(s.leftSider, props.classNames?.leftSider),
        body: cx(s.body, props.classNames?.body),
        content: cx(s.content, props.classNames?.content),
      }}
      slots={{
        header: (props.options?.showHeader ?? true) ? headerSlotRender : null,
        footer: <Footer slots={{
          left: props.slots?.leftSider ? footerLeftSlotRender : undefined,
          right: 'ver.: 0.1.0',
        }}/>,
        titlePage: (props.slots?.hasButtonBack || props.slots?.titlePage || props.slots?.titlePageActions) && titlePageRender,
        leftSider: props.slots?.leftSider,
        rightSider: props.slots?.rightSider,
      }}
    >
      {props.children}
    </Layout>
  );
};
