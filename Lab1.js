class LinkedList {

    constructor() {
        this._head = null;
    }

    at(index) {
        if (arguments.length < 1)
            throw new Error("Index parameter is absent");

        var c = this._head;
        for (var i = 0; i < index; ++i) {
            c = c.next;
            if (!c)
                throw new RangeError();
        }

        return c.data;
    }

    append(data) {
        if (arguments.length < 1)
            throw new Error("Data parameter is absent");

        if (this._head) {
            var node = this._head;
            while (node.next) {
                node = node.next;
            }

            node.next = new ListNode(data, node);
        }
        else {
            this._head = new ListNode(data);
        }
    }

    insertAt(index, data) {
        if (arguments.length < 2)
            throw new Error("Wrong number of parameters");

        if (!this._head) {
            this._head = new ListNode(data);
            return;
        }

        var c = this._head;
        for (var i = 0; i < index; ++i) {
            if (!c.next) {
                c.next = new ListNode(data, c);
                return;
            }

            c = c.next;
        }

        var newItem = new ListNode(data, c.prev, c);
        if (c.prev) c.prev.next = newItem;
        c.prev = newItem;
        if (index <= 0)
            this._head = newItem;
    }

    isEmpty() {
        return !this._head ? true : false;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        if (!this._head)
            return null;

        var node = this._head;
        while (node.next) {
            node = node.next;
        }

        return node.data;
    }

    clear() {
        this._head = null;
    }

    deleteAt(index) {
        if (arguments.length < 1)
            throw new Error("Index parameter is absent");

        var node = this._head;
        for (var i = 0; i < index; ++i) {
            if (node === null)
                throw new RangeError();

            node = node.next;
        }

        if (node === null)
            throw new RangeError();

        if (this._head === node)
            this._head = node.next;
        if (node.prev)
            node.prev.next = node.next;
        if (node.next)
            node.next.prev = node.prev;
    }

    reverse() {
        if (!this._head)
            return;

        var c = this._head;
        while (true) {
            var temp = c.next;
            c.next = c.prev;
            c.prev = temp;
            if (c.prev)
                c = c.prev;
            else
                break;
        }

        this._head = c;
    }

    indexOf(data) {
        if (arguments.length < 1)
            throw new Error("Data parameter is absent");

        var i = 0;
        var c = this._head;
        while (c && data !== c.data) {
            c = c.next;
            ++i;
        }

        if (!c)
            throw new RangeError();
        else
            return i;
    }
}

class ListNode {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev instanceof ListNode ? prev : null;
        this.next = next instanceof ListNode ? next : null;
    }
}