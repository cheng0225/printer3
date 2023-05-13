<!-- .filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())) -->
<template>
    <div>
        <!--type="flex" justify="center"  align="" -->
        <el-table :data="merchants" style="width: 100%" >
            <el-table-column label="商家编号" prop="number" align="center">
            </el-table-column>
            <el-table-column label="店名" prop="name">
            </el-table-column>
            <el-table-column label="地址" prop="address">
            </el-table-column>
            <el-table-column label="经纬度" prop="latlon">
            </el-table-column>
            <el-table-column align="right">
                <template slot-scope="scope">
                    <el-button @click="walk_go(scope.row)" type="primary" style="margin-left: 16px;">前往</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="content-box">
            <div id="mapBox" class="map-box"></div>
            <!-- <el-drawer title="遵守交通，一路顺风" :visible.sync="drawer1" :with-header="false">
            </el-drawer> -->
        </div>
    </div>
</template>


<style scoped>

.map-box {
    width: 100%;
    height: 800px;
}
</style>

<script>
import { get_merchants, get_err } from '@/api/app1.js'
export default {
    name: 'Merchants',
    data() {
        return {
            show_map: false,
            drawer1: false,
            msg: '',
            merchants: [],
            err_data: [],
        }
    },
    mounted() {
        // this.m();
        this.show_err();
    },
    methods: {
        m() {
            get_err().then(
                res => {
                    console.log(res)
                    this.msg = 'succeed'
                    this.merchants = res.data
                },
            )
        },
        
        show_err() {
            get_err().then(
                response => {
                    console.log('ok', response)
                    this.err_data = response.data
                },
            )
        }
    }
}
</script>