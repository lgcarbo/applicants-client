import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledGrid = styled(Grid)`
    border-radius: 4px;
    border: 1px black solid;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StyledRow = styled(Row)`

`;

export const HeaderRow = StyledRow.extend`
    border-bottom: 1px black solid;
    background-color: #337ab7;
    color: #fff;
`;

export const StyledCol = styled(Col)`
    border-right: 1px black solid;
    height: 35px;
    padding: 5px;
`;

export const CenteredCol = StyledCol.extend`
    text-align:center;
`;

export const CenteredDiv = styled.div`
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;