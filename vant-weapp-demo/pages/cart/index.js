Page({
  data: {
    checkedGoods: ['1', '2', '3'],
    goods: [
      {
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
      },
      {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg',
      },
      {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg',
      },
    ],
    totalPrice: 0,

  },
  onLoad: function() {
    const { checkedGoods, goods } = this.data;
    const submitBarText = `结算`;
    const totalPrice = goods.reduce(
      (total, item) =>
        total + (checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
      0,
    );
    goods.forEach(item => {
      item.formatPrice = (item.price / 100).toFixed(2);
    });
    this.setData({
      totalPrice,
      submitBarText,
      goods,
    });
  },

  onChange(event) {
    const { goods } = this.data;
    const checkedGoods = event.detail;
    const totalPrice = goods.reduce(
      (total, item) =>
        total + (checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
      0,
    );
    const submitBarText = checkedGoods.length ? `结算`: '结算';
    this.setData({
      checkedGoods,
      totalPrice,
      submitBarText,
    });
  },

  onSubmit() {
    wx.showToast({
      title: '点击结算',
      icon: 'none'
    });
  },
});