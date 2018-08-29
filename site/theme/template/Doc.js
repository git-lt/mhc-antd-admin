import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import Layout from './components/Layout';
import SideMenu from './components/SideMenu';
import ArticleDoc from './components/ArticleDoc';
import ComponentDoc from './components/ComponentDoc';

export default props => {
  const { pageData, data, router, location, utils } = props;

  console.log(props);
  if (!pageData) {
    router.push('/404');
    return null;
  } else {
    let pathArr = location.pathname.split('/');
    let currDocName = pathArr.pop();
    console.log(currDocName);

    let currData = {};
    if (currDocName === 'CHANGELOG') {
      currDocName = currDocName.toUpperCase();
      currData = pageData[currDocName];
    } else {
      currData = pageData;
    }
    const isCom = pathArr[0] === 'components';

    console.log(currData);
    console.log(isCom);

    return (
      <Layout location={props.location}>
        <Row>
          <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24} className="main-menu">
            <SideMenu defaultSelectedKey={location.pathname} data={data} style={{ paddingBottom: 100 }} />
          </Col>
          <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24} className="main-container">
            {
              isCom
                ? <ComponentDoc demos={currData.demo} doc={currData.index} {...props}></ComponentDoc>
                : <ArticleDoc {...currData} {...props}></ArticleDoc>
            }
          </Col>
        </Row>
      </Layout>
    );
  }
};

//  {/* <aside id="aside">
//         <SideMenu defaultSelectedKey={location.pathname} data={data} />
//       </aside>

//       <article id="article">
//         <div>
//           {
//             isCom
//               ? <ComponentDoc demos={currData.demo} doc={currData.index} {...props}></ComponentDoc>
//               : <ArticleDoc {...currData} {...props}></ArticleDoc>
//           }
//         </div>
//       </article> */}