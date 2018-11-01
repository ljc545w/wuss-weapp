Page({
  data: {
    visible: false,
  },
  close() {
    console.log('close');
  },
  afterClose() {
    console.log('afterClose');
    this.setData({
      visible: !this.data.visible,
    });
  },
  tagClick() {
    console.log('onClick');
  },
  toggleTag() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
