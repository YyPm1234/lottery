
var app =new Vue({
    // ��html id
    el: '#app',
    // ȫ�ֱ����洢
    data: {},
    // ��ʼ������
    created: function () {
        this.init();
    },
    // function��д����
    method:{
        init:function (){
            var params={};
            // ��װajx���� ���ú��
            // �˴���û�н��в��Ե�ʱ�򱨴��ȥ��log�鿴
            lotteryServ.execute("user", "login", params, function (data) {

            })
        },
    },
 })