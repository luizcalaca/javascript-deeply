class Node {
    constructor (val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length ++;
        return this;
    }

    pop () {
        if (!this.head) {
            return undefined;
        }
        const deletedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = deletedNode.prev;
            this.tail.next = null;
            deletedNode.prev = null;
        }
        this.length --;
        return deletedNode;
    }

    shift () {
        if (!this.head) {
            return undefined;
        }
        const deletedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = deletedNode.next;
            this.head.prev = null;
            deletedNode.next = null;
        }
        this.length --;
        return deletedNode;
    }

    unshift (val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length ++;
        return this;
    }

    // O(N)
    get (idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }

        let node = null;

        if (idx < this.length / 2) {
            node = this.head;
            for (let i = 0; i < idx; i ++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > idx; i --) {
                node = node.prev;
            }
        }

        return node;
    }

    set (idx, val) {
        const node = this.get(idx);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    // O(1)
    insert (idx, val) {
        if (idx === 0) {
            return !!this.unshift(val);
        }
        if (idx === this.length) {
            return !!this.push(val);
        }
        const previous = this.get(idx - 1);
        if (!previous) {
            return false;
        }
        const next = previous.next;
        const inserted = new Node(val);
        inserted.prev = previous;
        inserted.next = next;
        next.prev = inserted;
        previous.next = inserted;
        this.length ++;
        return true;
    }

    // O(1)
    remove (idx) {
        if (idx === 0) {
            return this.shift();
        }
        if (idx === this.length - 1) {
            return this.pop();
        }
        const removed = this.get(idx);
        if (!removed) {
            return undefined;
        }
        const next = removed.next;
        const prev = removed.prev;
        prev.next = next;
        next.prev = prev;
        removed.next = null;
        removed.prev = null;
        this.length --;
        return removed;
    }

    reverse () {
        if(this.length <= 1) {
            return this;
        }

        let node = null;
        let prev = null;
        let next = null;
        let head = this.head;
        let tail = this.tail;

        for (let i = 0; i < this.length; i ++) {
            if (i === 0) {
                node = this.head;
            }
            prev = node.prev;
            next = node.next;
            node.prev = next;
            node.next = prev;
            node = next;
        }

        this.head = tail;
        this.head.prev = null;
        this.tail = head;
        this.tail.next = null;

        return this;
    }
}

const list = new DoublyLinkedList();

list.push(5).push(55).push(555).push(5555);
console.log(list.reverse());