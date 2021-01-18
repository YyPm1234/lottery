new Vue({
    // ��html id
    el: '#newLottery',
    // ȫ�ֱ����洢
    data: {
        dynamicValidateForm: {
            prizes: [
                {
                    prizeName: null,
                    num: 0
                }
            ],

            lotteryName: '',
        }
    },

    // function��д����
    methods: {
        submitForm: function () {
            const param = {
                lotteryName: this.dynamicValidateForm.lotteryName,
                prize: this.dynamicValidateForm.prizes,
            }
            axios.post('lottery/createPrize',param,function (response){
                console.log("sad")
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
    },
})

