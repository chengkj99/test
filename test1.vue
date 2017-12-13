<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <XTree
          :getModelChildren="getModelChildren"
          @selected-changed="selectedNodeChanged"
          ref="xtree"
        ></XTree>
      </el-col>
      <el-col :span="18">
        <el-tabs type="border-card" v-model="selectedTab" @tab-click="selectTab">
          <el-tab-pane label="模版" name="template">

            <el-row :gutter="20">
              <el-col :span="6">
                <el-table
                  :data="templates"
                  highlightCurrentRow
                  @current-change="selectTemplate"
                  ref="templates"
                  border>
                  <el-table-column
                    prop="name"
                    label="名称">
                  </el-table-column>
                </el-table>
                <br/>
                <el-button @click="showNew">新建模版</el-button>
              </el-col>

              <el-col :span="18">
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">ID：</el-col>
                  <el-col :span="16" >{{ selectedTemplate.id }}</el-col>
                </el-row>
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">名称：</el-col>
                  <el-col :span="16" >
                    <el-input v-model="selectedTemplate.name"></el-input>
                  </el-col>
                </el-row>
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">类型：</el-col>
                  <el-col :span="16" >
                    <el-select v-model="selectedTemplate.type" @change="typeChanged" :disabled="!!selectedTemplate.id">
                      <el-option v-for="item in templateTypes" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                  </el-col>
                </el-row>

                <el-row :gutter="10" v-for="param in typeParams[selectedTemplate.type]"
                        v-if="!param.tabs || param.tabs.indexOf(selectedTab) > -1"
                        :key="param.name"
                >
                  <el-col :span="6" align="right">{{ param.text }}：</el-col>
                  <el-col :span="16" >
                    <el-input v-if="!param.type || param.type === 'string'"
                      v-model="kvParameters[param.name]"
                      :placeholder="param.placeholder"
                      auto-complete="off"></el-input>
                    <el-input v-if="param.type === 'strings'"
                      v-model="kvParameters[param.name]"
                      type="textarea"
                      :placeholder="param.placeholder"
                      auto-complete="off"></el-input>
                    <el-switch v-if="param.type === 'bool'"
                      v-model="kvParameters[param.name]"
                      on-text="是"
                      off-text="否">
                    </el-switch>
                    <el-input-number v-if="param.type === 'int'"
                      v-model="kvParameters[param.name]"></el-input-number>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="10" align="center">
                    <el-button type="primary" @click="saveTemplate">保存</el-button>
                  </el-col>
                  <el-col :span="10" align="center">
                    <el-button type="primary" @click="deleteTemplate">删除</el-button>
                  </el-col>
                </el-row>

              </el-col>
            </el-row>

          </el-tab-pane>
          <el-tab-pane label="发布" name="deploy">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-table
                  :data="templates"
                  highlightCurrentRow
                  @current-change="selectTemplate"
                  ref="tasks"
                  border>
                  <el-table-column
                    prop="name"
                    label="名称">
                  </el-table-column>
                </el-table>
              </el-col>

              <el-col :span="18">
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">ID：</el-col>
                  <el-col :span="16" >{{ selectedTemplate.id }}</el-col>
                </el-row>
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">名称：</el-col>
                  <el-col :span="16" >{{ selectedTemplate.name }}</el-col>
                </el-row>
                <el-row :gutter="10" >
                  <el-col :span="6" align="right">类型：</el-col>
                  <el-col :span="16" >{{ selectedTemplate.type }}</el-col>
                </el-row>

                <el-row :gutter="10" v-for="param in typeParams[selectedTemplate.type]"
                        v-if="!param.tabs || param.tabs.indexOf(selectedTab) > -1"
                        :key="param.name"
                >
                  <el-col :span="6" align="right">{{ param.text }}：</el-col>
                  <el-col :span="16" >
                    <el-input v-if="!param.type || param.type === 'string'"
                              :disabled="param.readonlyTabs && param.readonlyTabs.indexOf(selectedTab) > -1"
                              v-model="kvParameters[param.name]"
                              auto-complete="off"></el-input>
                    <el-input v-if="param.type === 'strings'"
                              v-model="kvParameters[param.name]"
                              type="textarea"
                              :placeholder="param.placeholder"
                              auto-complete="off"></el-input>
                    <el-switch v-if="param.type === 'bool'"
                               v-model="kvParameters[param.name]"
                               on-text="是"
                               off-text="否">
                    </el-switch>
                    <el-input-number v-if="param.type === 'int'"
                                     v-model="kvParameters[param.name]"></el-input-number>
                    <el-select v-if="param.type === 'selector'"
                      v-model="kvParameters[param.name]" placeholder="请选择">
                      <el-option v-for="item in getProp(param.from)" :key="item.name" :label="item.name" :value="item.name"></el-option>
                    </el-select>

                    <div v-if="param.type === 'tree'">
                      <el-tree
                        :data="getProp(param.from)"
                        show-checkbox
                        default-expand-all
                        :node-key="param.key"
                        :ref="param.ref"
                        highlight-current
                        :props="serverTreeProps">
                      </el-tree>
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col align="center">
                    <el-button type="primary" @click="runTemplate">执行</el-button>
                  </el-col>
                </el-row>

              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="日志" name="log">

            <el-row :gutter="20">
              <el-col :span="6">
                <el-table
                  :data="templates"
                  highlightCurrentRow
                  @current-change="selectTemplate"
                  ref="tasks"
                  border>
                  <el-table-column
                    prop="name"
                    label="名称">
                  </el-table-column>
                </el-table>
              </el-col>

              <el-col :span="18">
                <el-table :data="runningAndHistoryStage"
                >
                  <el-table-column type="expand">
                    <template scope="scope">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item v-for="(s, h) in scope.row.hostStage" :label="h" :key="h">
                          <el-button v-if="s.log" @click="showLog(s.log)" type="text">{{ stageText[s.stage] }}</el-button>
                          <span v-else>{{ stageText[s.stage] }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>

                  <el-table-column
                    width="170px"
                    prop="beginTime"
                    label="开始时间">
                  </el-table-column>
                  <el-table-column
                    width="170px"
                    prop="endTime"
                    label="结束时间">
                  </el-table-column>
                  <el-table-column
                    label="状态">
                    <template scope="scope">
                      {{ stageText[scope.row.stage] }}
                      <el-button v-if="scope.row.stage === 1" @click="terminateJob" type="primary">终止</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="executor"
                    label="执行人">
                  </el-table-column>

                </el-table>
              </el-col>
            </el-row>

          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-dialog title="日志详情" :visible.sync="dialogVisible">
        <div class="ui segment">
            <span class="title">名称：</span>{{log.name}}
        </div>
        <div class="ui segment">
          <p>
            <span class="title">机器名：</span> {{log.node}}
          </p>
        </div>
        <div class="ui segment">
          <p>
            <span class="title">用户：</span>
            <i class="attention warning icon" v-if="log.user == 'root' || log.user == ''"></i> {{log.user}}
      </p>
        </div>
        <div class="ui segment">
          <p>
            <span class="title">耗时：</span>
            {{log.beginTime}} - {{log.endTime}}
      </p>
        </div>
        <div class="ui segment">
          <p>
            <span class="title">结果：</span>
            <span v-if="log.success">成功</span>
            <span v-else>失败</span>
          </p>
        </div>

      <h4 class="ui header">命令</h4>{{log.command}}
      <h4 class="ui header">输出</h4>
      <div style="overflow:auto"><pre>{{log.output}}</pre></div>

    </el-dialog>
  </div>
</template>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  .title {
    display: inline-block;
    width: 60px;
  }
  .ui.segment {
    height: 30px;
  }
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>

<script type="text/javascript">
  import XTree from './XTree.vue'
  import Tags from './TagsEditor.vue'
  import configs from '../config'
  import utils from '../utils'

  export default {
    data() {
      return {
        node: {},
        isLeafNode: false,
        selectedTab: "template",

        templates: [],
        templateTypes: [],

        selectedTemplate: {},
          taskId: "",
        kvParameters: {},
        packageNames: [],
        servers: [],
        serverTreeProps: {
          children: 'children',
          label: 'name'
        },

        lastJobStage: {},
        history: [],
        dialogVisible: false,
        log: {},

        stageText: ['等待中', '运行中', '终止中', '已终止', '不稳定', '成功', '失败', '离线'],
        // 不同模版需要的参数
        typeParams: {
          standard_deploy: [
            {
              name: 'job_name',
              text: 'Jenkins 任务名称',
              required: false,
              placeholder: '如果为空, 表示不使用 Jenkins, 所以不会下载包',
              readonlyTabs: ['deploy']
            },
            {
              name: 'package_name',
              text: '包名',
              required: false,
              tabs: ['deploy'],
              type: 'selector',
              from: 'packageNames',
            },
            {
              name: 'run_path',
              text: '运行目录',
              init: '/home/qboxserver'
            },
            {
              name: 'package_dst',
              text: '目标目录',
              init: '/home/qboxserver/[服务目录]/_package'
            },
            {
              name: 'script_path',
              text: '脚本路径',
              init: '/usr/local/bin/sre-scripts/deploy.py'
            },
            {
              name: 'cm_path',
              text: '配置路径',
              placeholder: '如果指定, 将不会使用节点关联的配置路径',
              required: false,
            },
            {
              name: 'pre_command',
              text: '前置命令',
              required: false,
              placeholder: '可以留空',
              invalid: ['"']
            },
            {
              name: 'stop_command',
              text: '终止命令',
              placeholder: '不可留空, 如果不需执行, 可以写 :',
              invalid: ['"']
            },
            {
              name: 'start_command',
              text: '启动命令',
              placeholder: '不可留空, 如果不需执行, 可以写 :',
              invalid: ['"']
            },
            {
              name: 'test_commands',
              text: '测试命令',
              type: 'strings',
              placeholder: '每行一条命令, 可以留空',
              required: false,
              invalid: ['"']
            },
            {
              name: 'post_command',
              text: '后置命令',
              required: false,
              placeholder: '可以留空',
              invalid: ['"']
            },
            {
              name: 'http_check',
              text: 'HTTP 校验',
              type: 'bool',
              init: false
            },
            {
              name: 'user',
              text: '用户',
              init: 'qboxserver'
            },
            {
              name: 'timeout',
              text: '超时时间',
              type: 'int',
              init: 300
            },
            {
              name: 'servers',
              text: '服务器',
              tabs: ['deploy'],
              type: 'tree',
              from: 'servers',
              ref: 'serverTree',
              key: 'name'
            },
            {
              name: 'sleep',
              text: 'Sleep',
              type: 'int',
              init: 5
            },
            {
              name: 'concurrence_idc',
              text: 'IDC 并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'concurrence_server',
              text: '服务器并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'pause_after_first_fail',
              text: '失败后暂停',
              type: 'bool',
              init: true
            },
            {
              name: 'contacters',
              text: '联系人',
              type: 'strings',
              placeholder: '每行一个',
              required: false
            }
          ],
          simple_script: [
            {
              name: 'command',
              text: '命令'
            },
            {
              name: 'run_path',
              text: '运行路径',
              init: '/tmp'
            },
            {
              name: 'user',
              text: '用户',
              init: 'qboxserver'
            },
            {
              name: 'timeout',
              text: '超时时间',
              type: 'int',
              init: 300
            },
            {
              name: 'servers',
              text: '服务器',
              tabs: ['deploy'],
              type: 'tree',
              from: 'servers',
              ref: 'serverTree',
              key: 'name'
            },
            {
              name: 'sleep',
              text: 'Sleep',
              type: 'int',
              init: 5
            },
            {
              name: 'concurrence_idc',
              text: 'IDC 并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'concurrence_servers',
              text: '服务器并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'pause_after_first_fail',
              text: '失败后暂停',
              type: 'bool',
              init: true
            },
            {
              name: 'contacters',
              text: '联系人',
              type: 'strings',
              placeholder: '每行一个',
              required: false
            }
          ],
          standard_script: [
            {
              name: 'script_path',
              text: '脚本路径',
              init: '/tmp/example.py'
            },
            {
              name: 'arguments',
              text: '参数'
            },
            {
              name: 'run_path',
              text: '运行路径',
              init: '/tmp'
            },
            {
              name: 'user',
              text: '用户',
              init: 'qboxserver'
            },
            {
              name: 'timeout',
              text: '超时时间',
              type: 'int',
              init: 300
            },
            {
              name: 'servers',
              text: '服务器',
              tabs: ['deploy'],
              type: 'tree',
              from: 'servers',
              ref: 'serverTree',
              key: 'name'
            },
            {
              name: 'sleep',
              text: 'Sleep',
              type: 'int',
              init: 5
            },
            {
              name: 'concurrence_idc',
              text: 'IDC 并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'concurrence_servers',
              text: '服务器并发数',
              type: 'int',
              init: 1
            },
            {
              name: 'pause_after_first_fail',
              text: '失败后暂停',
              type: 'bool',
              init: true
            },
            {
              name: 'contacters',
              text: '联系人',
              type: 'strings',
              placeholder: '每行一个',
              required: false
            }
          ]
        }
      }
    },

    computed:{
      runningAndHistoryStage() {
        var stages = this.history.slice();
        if (this.lastJobStage.stage < 3) {
          stages.splice(0, 0, this.lastJobStage);
        }
        return stages;
      }
    },

    methods: {
      selectedNodeChanged: function (data, node) {
        if (this.node.id === data.id) {
          return;
        }

        this.node = data;

        if (node.loaded && node.childNodes.length < 1) {
          this.isLeafNode = true;
        } else {
          this.isLeafNode = false;
        }

        this.selectedTemplate = {};
        this.getData();
        this.getServers();

        this.$router.push({path: 'deploy', query: {id: data.id, tab: this.selectedTab}});
      },

      getServers() {
        this.servers = [];

        var vm = this;
        this.$http.get(configs.api_host + '/node/' + this.node.id + '/children/server').then(response => {
          var nodesWithServers = response.data.filter(n => {return n.children && n.children.length > 0});
          if (nodesWithServers.length < 1) {
            return;
          }

          vm.servers = [{
            id: this.node.id,
            name: this.node.name,
            children: nodesWithServers
          }]
        })
      },

      selectTemplate(current, old) {
        if (this.selectedTab != 'template' && current && !current.id) {
          current = this.templates[0];
        }
        this.selectedTemplate = Object.assign({}, current);
        this.setKvFromParams(this.selectedTemplate.type, this.selectedTemplate.parameters);

        switch (this.selectedTab) {
          case 'deploy':
            this.packageNames = [];
            var vm = this;
            if (this.selectedTemplate.type === 'standard_deploy') {
              this.$http.get(configs.api_host + '/package?order_by=number desc&job_name=' + this.selectedTemplate.parameters.job_name).then(response => {
                vm.packageNames = response.data.data.map(d => {return {name: d.file_name, url: d.url}});
              })
            }
            break;
          case 'log':
            this.lastJobStage = {};
            this.history = [];
            if (!this.selectedTemplate.task_id) {
              return
            }
            this.getLogs();
            break;
        }
      },

      getLogs() {
        var vm = this;
        var url = configs.api_host + '/task/stage/' + this.selectedTemplate.node_id + '/' + this.selectedTemplate.task_id;
          // var url = configs.api_host + '/task/stage/' + this.selectedTemplate.node_id + '/' + this.taskId;

        this.$http.get(url).then(response => {
          vm.lastJobStage = response.data;
        })
        this.$http.get(configs.api_host + '/task/log?jobId=' + this.selectedTemplate.task_id).then(response => {
          vm.history = response.data.list;
        })
      },

      showLog(id) {
        var vm = this;
        this.$http.get(configs.api_host + '/task/log/' + id).then(response => {
          var log = response.data;
          log.beginTime = log.beginTime.substr(0, 19).replace('T', ' ');
          log.endTime = log.endTime.substr(0, 19).replace('T', ' ');
          vm.log = log;
          vm.dialogVisible = true;
        })
      },

      getProp(prop) {
        return this[prop];
      },

      getData() {
        this.templates = [];

        var vm = this;
        var currentRow = this.selectedTemplate.id;
        this.$http.get(configs.api_host + '/task/template?limit=1000&node_id=' + this.node.id).then(response => {
          vm.templates = response.data.data;
          if (vm.templates.length < 1) {
            return
          }
          var row = vm.templates[0];
          if (currentRow) {
            for (var i in vm.templates) {
              if (vm.templates[i].id === currentRow) {
                row = vm.templates[i];
                break;
              }
            }
          }
          vm.$refs.templates.setCurrentRow(row);
        })
      },

      selectTab(tab) {
        this.selectedTab = tab.name;
        this.$router.replace({path: 'deploy', query: {id: this.node.id, tab: this.selectedTab}});
        this.selectTemplate(this.selectedTemplate);
      },

      getModelChildren: function (model, cb) {
        var pid = '';
        if (model) {
          pid = model.id;
        }
        var url = configs.api_host + '/node?pid=' + pid;
        var vm = this;
        this.$http.get(url).then(function (response) {
          cb(response.data);
          if (vm.node.id === pid) {
            vm.isLeafNode = response.data.length < 1;
          }
        })
      },

      terminateJob() {
        this.$confirm('确定要终止任务 ' + this.selectedTemplate.name + ' 么？', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var vm = this;
          this.$http.delete(configs.api_host + /task/ + this.selectedTemplate.id).then(response => {
            vm.$message('终止成功');
            vm.getLogs();
          }).catch(response => {
            vm.$alert(response.body, '终止失败');
          })
        })
      },

      runTemplate() {
        var errorMsg = this.checkKvParameters(this.typeParams[this.selectedTemplate.type]);
        if (errorMsg) {
          this.$alert(errorMsg, '信息不完整');
          return
        }

        delete this.selectedTemplate.ctime;
        delete this.selectedTemplate.mtime;
        this.selectedTemplate.parameters = this.getParamsFromKv(this.selectedTemplate.type);

        this.$http.post(configs.api_host + '/task', this.selectedTemplate).then(response => {
          // if (!this.selectedTemplate.task_id) {
          //   this.$set(this.selectedTemplate, "task_id", response.data.id);
          // }
          // this.taskId = response.data.id;
            this.selectedTemplate.task_id = response.data.id;
          this.$message('开始执行');
          this.selectTab({name: 'log'});
        }).catch(response => {
          this.$alert(response.data.error, '执行失败');
        })
      },

      showNew() {
        if (!this.selectedTemplate.id) {
          return;
        }
        var initTYpe = 'standard_deploy';
        var newTemplate = {
          type: initTYpe,
          parameters: this.getInitKv(initTYpe)
        };
        this.$refs.templates.setCurrentRow(newTemplate);
      },

      typeChanged(value) {
        if (this.selectedTemplate.id) {
          return;
        }

        this.kvParameters = this.getInitKv(value);
      },

      getInitKv(templateType) {
        var params = this.typeParams[templateType];
        var result = {};
        for (var i in params) {
          var p = params[i];
          if (p.init) {
            result[p.name] = p.init;
          }
        }
        return result;
      },

      checkKvParameters(paramInfos) {
        for (var i in paramInfos) {
          var p = paramInfos[i];
          if (p.required === false && !this.kvParameters[p.name]) {
            continue;
          }
          if (p.tabs && p.tabs.indexOf(this.selectedTab) < 0) {
            continue;
          }
          switch (p.type) {
            case undefined:
            case 'string':
            case 'strings':
            case 'selector':
              if (!this.kvParameters[p.name]) {
                return p.text + '必须输入'
              } else if (p.invalid) {
                for (var i in p.invalid) {
                  if (this.kvParameters[p.name].includes(p.invalid[i])) {
                    return p.text + '包含非法字符：' + p.invalid[i];
                  }
                }
              }
              break;
            case 'tree':
              var servers = this.$refs[p.ref][0].getCheckedKeys(true);
              if (servers.length === 0) {
                return '必须选择至少一个' + p.text;
              }
              break;
          }
        }
      },

      setKvFromParams(scriptType, params) {
        if (scriptType && params) {
          var kvs = Object.assign({}, params);
          this.typeParams[scriptType].forEach(p => {
            if (!p.type || p.type === 'string' || p.type === 'selector') {
              kvs[p.name] = params[p.name] || '';
            } else if (p.type === 'strings') {
              if (params[p.name]) {
                kvs[p.name] = params[p.name].join('\n');
              } else {
                kvs[p.name] = '';
              }
            }
          });
          this.kvParameters = kvs;
        } else {
          this.kvParameters = {};
        }
      },

      getParamsFromKv(scriptType) {
        var params = Object.assign({}, this.kvParameters);
        this.typeParams[scriptType].forEach(p => {
          if (p.type === 'strings') {
            params[p.name] = params[p.name] ? params[p.name].split('\n') : [];
          } else if (p.type === 'tree' && p.tabs && p.tabs.indexOf(this.selectedTab) > -1) {
            params[p.name] = this.$refs[p.ref][0].getCheckedKeys(true);
          }
          if (p.name === 'package_name') {
            var pk = this.packageNames.find(p => {return p.name === this.kvParameters.package_name});
            if (pk) {
              params['package_url'] = pk.url;
            }
          }
        });
        return params;
      },

      saveTemplate() {
        var errorMsg = utils.validDialogData(this.selectedTemplate, {type: '脚本类型', name: '名称'})
        if (!errorMsg) {
          errorMsg = this.checkKvParameters(this.typeParams[this.selectedTemplate.type]);
        }
        if (errorMsg) {
          this.$alert(errorMsg, '信息不完整');
          return
        }

        this.selectedTemplate.node_id = this.node.id;
        delete this.selectedTemplate.ctime;
        delete this.selectedTemplate.mtime;
        this.selectedTemplate.parameters = this.getParamsFromKv(this.selectedTemplate.type);

        var vm = this;
        if (this.selectedTemplate.id) {
          this.$http.put(configs.api_host + '/task/template/' + this.selectedTemplate.id, this.selectedTemplate).then(response => {
            vm.$message('修改成功');
            vm.getData();
          })
        } else {
          this.$http.post(configs.api_host + '/task/template', this.selectedTemplate).then(response => {
            vm.$message('新建成功');
            vm.selectedTemplate = response.data;
            vm.getData();
          })
        }
      },

      deleteTemplate() {
        this.$confirm('此操作将永久删除' + this.selectedTemplate.name + '，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = configs.api_host + '/task/template/' + this.selectedTemplate.id;
          var vm = this;
          this.$http.delete(url).then((response) => {
            vm.getData();
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          }, (response) => {
            console.log(response);
            vm.$alert(response.data.error, '删除失败');
          })
        })
      }
    },

    mounted() {
      var tab = this.$route.query.tab;
      if (tab) {
        this.selectedTab = tab;
      }
    },

    created() {
      var vm = this;
      this.$http.get(configs.api_host + '/task/type').then(response => {
        vm.templateTypes = response.data;
      })
    },

    components: {
      "XTree": XTree, "Tags": Tags
    }
  }
</script>

<style>

</style>

