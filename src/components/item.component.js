import { Button, Checkbox, Card } from '@material-ui/core';

function ItemComponent({ texto, index, onExcluir }) {
    const handleExcluir = () => {
        onExcluir(index);
    }

    return(
        <Card>
            <Checkbox/>
            {texto}
            <Button variant="outlined" color="secondary" style={{float: 'right'}} onClick={handleExcluir}>Excluir</Button>
        </Card>
    )
}

export default ItemComponent;