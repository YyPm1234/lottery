new Vue({
    // ��html id
    el: '#newLottery',
    // ȫ�ֱ����洢
    data: {
        dynamicValidateForm: {
            prizes: [
                {
                    prizeName: '',
                    num: 1
                }
            ],
            password: '',
            lotteryName: '',
            url: '',
        },
        lotteryId: '',
        uploadVisible: false,
        createSuccess: false
    },

    // function��д����
    methods: {
        submitForm: function () {
            const param = {
                lotteryName: this.dynamicValidateForm.lotteryName,
                password: this.dynamicValidateForm.password,
                prize: this.dynamicValidateForm.prizes,
            }
            this.$refs['dynamicValidateForm'].validate((valid) => {
                if (valid) {
                    axios.post('lottery/createPrize', param, null).then(res => {
                        if (res.data.success) {
                            this.lotteryId = res.data.data;
                            this.url = "localhost:8089/lottery?lotteryId=" + this.lotteryId;
                            this.createSuccess = true;
                            // this.uploadVisible=true;
                        }
                    })
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.prizes.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.prizes.splice(index, 1)
            }
        },
        addDomain() {
            this.dynamicValidateForm.prizes.push({
                prizeName: '',
                num: 1,
            });
        },
        createEnd() {
            this.createSuccess=false;
            this.uploadVisible = false;
            const parma = 'lottery?lotteryId=' + this.lotteryId
            self.location.href=parma;
        }
    },
})

