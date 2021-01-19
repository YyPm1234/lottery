new Vue({
    // ��html id
    el: '#newLottery',
    // ȫ�ֱ����洢
    data: {
        dynamicValidateForm: {
            prizes: [
                {
                    prizeName: '',
                    num: 0
                }
            ],
            password: '',
            lotteryName: '',
        },
        uploadVisible:false,

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
                        if (res.data.success){
                            this.uploadVisible=true;
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
                num: 0,
            });
        },
        handleClose(done) {
            this.$confirm('ȷ�Ϲرգ�')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    },
})

