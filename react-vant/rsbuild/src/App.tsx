import { Flex, CellGroup, Cell } from 'react-vant';
import {
  Records,
  Tosend,
  Logistics,
  PendingPayment,
  Points,
  GoldCoinO,
  GiftO,
} from '@react-vant/icons';
import './App.scss';

const App = () => (
  <div className="container-box">
    <main>
      <div>
        <img
          className="user-poster"
          src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
        />
        <Flex className="user-links">
          <Flex.Item span="6">
            <PendingPayment />
            待付款
          </Flex.Item>
          <Flex.Item span="6">
            <Records />
            待接单
          </Flex.Item>
          <Flex.Item span="6">
            <Tosend />
            待发货
          </Flex.Item>
          <Flex.Item span="6">
            <Logistics />
            已发货
          </Flex.Item>
        </Flex>

        <CellGroup className="user-group">
          <Cell icon={<Records />} title="全部订单" isLink />
        </CellGroup>

        <CellGroup>
          <Cell icon={<Points />} title="我的积分" isLink />
          <Cell icon={<GoldCoinO />} title="我的优惠券" isLink />
          <Cell icon={<GiftO />} title="我收到的礼物" isLink />
        </CellGroup>
      </div>
    </main>
  </div>
);

export default App;
