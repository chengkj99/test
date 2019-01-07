// 构造二叉树

class BinaryTree {
    
    constructor() {
        this.root = null
    }
    getNode (value) {
        return {
            value,
            left: null,
            right: null
        }
    }

    insertNode (node, newNode) {
        if (node.value > newNode.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    insert (value) {
        let newNode = this.getNode(value)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
}

let arr = [30,1,2,3,4,5,9,87,6]
const binaryTree = new BinaryTree()
arr.forEach(item => {
    binaryTree.insert(item)
})
console.log(binaryTree.root)