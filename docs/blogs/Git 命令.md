---
title: "Git常用命令"
date: 2025-07-03
categories:
  - 前端
  - Git
tags:
  - Git
sidebar: 'auto'
publish: true
sticky: 2
---

1. 初始化配置

---
_<font style="color:rgb(153, 153, 136);"># 配置全局用户名和邮箱</font>_  
git config --global user.name <font style="color:rgb(221, 17, 68);">"FedJavaScript"</font>  
git config --global user.email <font style="color:rgb(221, 17, 68);">"FedJavaScript@example.com"</font>  
  
_<font style="color:rgb(153, 153, 136);"># 查看配置信息</font>_  
git config --list

---

2. 仓库初始化

---
_<font style="color:rgb(153, 153, 136);"># 初始化新仓库</font>_  
git init  
  
_<font style="color:rgb(153, 153, 136);"># 克隆远程仓库</font>_  
` git clone <repository-url> `

---

3. 状态查看

---
_<font style="color:rgb(153, 153, 136);"># 查看工作区状态</font>_  
git status  
  
_<font style="color:rgb(153, 153, 136);"># 查看简化状态信息</font>_  
git status -s  
  
_<font style="color:rgb(153, 153, 136);"># 查看分支情况</font>_  
git branch -v

---

4. 添加和提交

---
_<font style="color:rgb(153, 153, 136);"># 添加指定文件到暂存区</font>_  
` git add <file-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 添加所有更改</font>_  
git add .  
  
_<font style="color:rgb(153, 153, 136);"># 提交到本地仓库</font>_  
git commit -m <font style="color:rgb(221, 17, 68);">"commit message"</font>  
  
_<font style="color:rgb(153, 153, 136);"># 添加并提交</font>_  
git commit -am <font style="color:rgb(221, 17, 68);">"commit message"</font>

---

5. 分支操作

---
_<font style="color:rgb(153, 153, 136);"># 创建新分支</font>_  
` git branch <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 切换分支</font>_  
` git checkout <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 创建并切换分支</font>_  
` git checkout -b <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 删除分支</font>_  
` git branch -d <branch-name> `

---

6. 远程仓库操作

---
_<font style="color:rgb(153, 153, 136);"># 添加远程仓库</font>_  
` git remote add origin <repository-url>  `
  
_<font style="color:rgb(153, 153, 136);"># 查看远程仓库</font>_  
git remote -v  
  
_<font style="color:rgb(153, 153, 136);"># 推送到远程</font>_  
` git push origin <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 拉取远程更新</font>_  
` git pull origin <branch-name> `

---

7. 合并与衍合

---
_<font style="color:rgb(153, 153, 136);"># 合并分支</font>_  
` git merge <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 变基操作</font>_  
` git rebase <branch-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 解决冲突后继续变基</font>_  
git rebase --<font style="color:rgb(0, 134, 179);">continue</font>

_<font style="color:rgb(153, 153, 136);"># 提交</font>_

` git push origin <branch-name> `

---

8. 修改远程分支名称

---
_<font style="color:rgb(153, 153, 136);"># 重命名本地分支</font>_

` git branch -M <oldBranch-name> <newBranch-name> `

_<font style="color:rgb(153, 153, 136);"># 删除远程分支</font>_

` git push --delete origin <oldBranch-name> `

_<font style="color:rgb(153, 153, 136);"># 上传新命名的本地分支</font>_

` git push origin <newBranch-name> `

---

9. 暂存操作

---
_<font style="color:rgb(153, 153, 136);"># 保存当前工作进度</font>_  
git stash  
  
_<font style="color:rgb(153, 153, 136);"># 查看存储的工作进度</font>_  
git stash list  
  
_<font style="color:rgb(153, 153, 136);"># 恢复最近的进度</font>_  
git stash pop  
  
_<font style="color:rgb(153, 153, 136);"># 删除所有进度</font>_  
git stash clear

---

10. 标签管理

---
_<font style="color:rgb(153, 153, 136);"># 创建标签</font>_

` git tag <tag-name> `

_<font style="color:rgb(153, 153, 136);"># 创建带注释的标签</font>_

` git tag -a <tag-name> -m "tag message" `

_<font style="color:rgb(153, 153, 136);"># 推送标签到远程</font>_

` git push origin <tag-name> `

---

11. 日志查看

---
_<font style="color:rgb(153, 153, 136);"># 查看提交日志</font>_  
git <font style="color:rgb(0, 134, 179);">log</font>  
  
_<font style="color:rgb(153, 153, 136);"># 查看简化日志</font>_  
git <font style="color:rgb(0, 134, 179);">log</font> --oneline  
  
_<font style="color:rgb(153, 153, 136);"># 查看图形化日志</font>_  
git <font style="color:rgb(0, 134, 179);">log</font> --graph --pretty=oneline --abbrev-commit

---

12. 差异比较

---
_<font style="color:rgb(153, 153, 136);"># 查看工作区和暂存区的差异</font>_  
git diff  
  
_<font style="color:rgb(153, 153, 136);"># 查看暂存区和最新提交的差异</font>_  
git diff --staged  
  
_<font style="color:rgb(153, 153, 136);"># 查看两个分支的差异</font>_  
` git diff <branch1> <branch2> `

---

13. 撤销操作

---
_<font style="color:rgb(153, 153, 136);"># 撤销工作区的修改</font>_  
` git checkout -- <file-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 撤销暂存区的修改</font>_  
` git reset HEAD <file-name>  `
  
_<font style="color:rgb(153, 153, 136);"># 创建反向提交</font>_  
` git revert <commit-id> `

---

14. 重置操作

---
_<font style="color:rgb(153, 153, 136);"># 软重置</font>_

git reset --soft HEAD^

_<font style="color:rgb(153, 153, 136);"># 混合重置</font>_

git reset --mixed HEAD^

_<font style="color:rgb(153, 153, 136);"># 硬重置</font>_

git reset --hard HEAD^

---



<h2 id="IxumD">提交信息规范</h2>

---
_<font style="color:rgb(153, 153, 136);"># 功能开发</font>_
feat: add new feature  
  
_<font style="color:rgb(153, 153, 136);"># 修复bug</font>_  
fix: resolve issue _<font style="color:rgb(153, 153, 136);">#123</font>_  
  
_<font style="color:rgb(153, 153, 136);"># 文档更新</font>_  
docs: update README.md

---

