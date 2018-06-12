let Node: any = {
    loginResult: true,
    nodeId: ''
}

export class NodeService{
    constructor(){}

    setNode(_node: any){
        Node = _node;
    }

    getNode(): any{
        return Node;
    }

    setNodeId(_nodeId : any){
        Node.nodeId = _nodeId;
    }

    setNodeType(_nodeType : any){
        Node.nodeType = _nodeType;
    }

}