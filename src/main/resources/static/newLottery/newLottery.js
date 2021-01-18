import axios from
new Vue({
    // ��html id
    el: '#newLottery',
    // ȫ�ֱ����洢
    data: {
        dynamicValidateForm: {
            prizes: [{
                value: '',
                num: 0,
            }],
            lotteryName: '',
        }
    },

    // function��д����
    methods: {

        submitForm: function (formName) {
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const param={
                            lotteryName: this.dynamicValidateForm.lotteryName,
                                prizes:this.dynamicValidateForm.prizes,
                        }
                       this.axios({
                            method:'get',
                            url:'http://locahost:8089/asd',
                            params:param
                        }).then(function (res){
                            console.log("asd")
                        })

                    }
                }
            )
            console.log(this.dynamicValidateForm)
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
                value: '',
                num: 0,
            });
        },
    },
})

