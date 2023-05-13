
<template slot-scope="scope">
    <div>
        <el-table :data="err_data.filter(data => !search || data.err.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column type="index" label="序号" width="125">
            </el-table-column>
            <el-table-column prop="err" label="错误信息" width="350">
            </el-table-column>
            <el-table-column prop="num" label="次数" width="180" align="center">
            </el-table-column>
            <el-table-column prop="txt" label="备注（解决方案）">
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入（错误信息）关键字搜索" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="解决方案" :visible.sync="drawer1">
            <el-form :model="err_form" :rules="rules" ref="err_form">
                <el-form-item label="说明" :label-width="formLabelWidth">
                    <el-input prop="txt" type="textarea" :rows="2" v-model="err_form.txt" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="open2">取 消</el-button>
                <el-button type="primary" @click="submit_err_form(err_form)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
  
<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>
  
<script>
import { get_err, patch_err } from '@/api/app1.js'

export default {
    data() {
        return {
            err_data: [],
            search: '',
            dialogTableVisible: false,
            drawer1: false,
            err_form: {},
            //  非空校验
            rules: {
                txt: [{required: true,  message: '请输入内容', trigger: 'blur'}],
            },
            formLabelWidth: '120px'
        }
    },

    mounted() {
        this.show_err();
    },

    methods: {
        // 更改数据
        handleEdit(index, row) {
            console.log(index, row);
            this.err_form = row
            // console.log(1, this.err_form)
            this.drawer1 = true;
        },
        // 删除数据  禁止  暂时用不上
        handleDelete(index, row) {
            console.log(index, row);
        },

        // 行的颜色
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2) {
                // return 'warning-row';
                return 'success-row';
            }
            return '';
        },

        // 显示数据
        show_err() {
            get_err('?ordering=-num').then(
                // console.log('正在获取数据'),  这里不可以输出，原因未知
                response => {
                    // console.log(response)
                    this.err_data = response.data
                },
                error => {
                    console.log(error)
                },
            )
        },

        // 打开各种弹窗   提交成功 取消提交之类的
        open1() {
            this.drawer1 = false;
            this.$message({
                message: '提交成功',
                type: 'success'
            });
        },
        open4(data) {
            this.$alert(data, '信息有误，请核对', {
                confirmButtonText: '确定',
            });
        },
        open2() {
            this.drawer1 = false
            this.$message({
                type: 'info',
                message: '取消输入'
            });

        },

        // 提交数据
        submit_err_form(err_form) {
            console.log(3, err_form)
            //  自动校验  失效  还没有找到原因
            this.$refs.err_form.validate((valid) => {
                if (valid) {
                    console.log(valid)
                    console.log('submit things_form', err_form)
                    patch_err(err_form).then(
                        response => {
                            this.open1();
                            console.log(response);
                        },
                        error => {
                            this.open4(error.response.data);
                            console.log(error);
                        }
                    )
                } else {
                    return false;
                }
            })
        }
    }
}
</script>