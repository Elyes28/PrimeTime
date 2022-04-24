import {
  Button,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Alert, Card } from "reactstrap";
import LoadingBox from "../../components/LoadingBox";
import CommonLayout from "../../containers/common/common-layout";
import { Store } from "../../utils/Store";
import useStyles from "./style";
import NextLink from "next/link";

export default function OrderHistory() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const classes = useStyles();
  const [orders, Setorders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`http://localhost:5000/orders/mine`).then((res) => {
        console.log(userInfo._id);
        Setorders(res.data);
        console.log(res.data);
      });
    };
    fetchData();
    if (!userInfo) {
      return Alert("Go To Sign In");
    }
  }, [userInfo]);
  return (
    <CommonLayout>
      <strong>Order History</strong>
      <Grid item md={9} xs={12}>
        <Card className={classes.section}>
          <List>
            <ListItem>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>DATE</TableCell>
                      <TableCell>TOTAL</TableCell>
                      <TableCell>PAID</TableCell>
                      <TableCell>DELIVERED</TableCell>
                      <TableCell>ACTION</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>{order._id.substring(20, 24)}</TableCell>
                        <TableCell>{order.createdAt}</TableCell>
                        <TableCell>${order.totalPrice}</TableCell>
                        <TableCell>
                          {order.isPaid
                            ? `paid at ${order.paidAt}`
                            : "not paid"}
                        </TableCell>
                        <TableCell>
                          {order.isDelivered
                            ? `delivered at ${order.deliveredAt}`
                            : "not delivered"}
                        </TableCell>
                        <TableCell>
                          <NextLink href={`/order/${order._id}`} passHref>
                            <Button variant="contained">Details</Button>
                          </NextLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </CommonLayout>
  );
}
