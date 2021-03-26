import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'

export default function home() {

    const [details, setDetails] = useState([{ id: 1, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' }])

    return (
        <View style={styles.card} >
            {
                details.map((detail) => (
                    <View key={detail.id} >
                        <Card>
                            <Card.Content>
                                <Title>{'Item Name'} </Title>
                                <Paragraph> {detail.itemname} </Paragraph>
                                <Title>{'CompanyName'} </Title>
                                <Paragraph> {detail.companyname} </Paragraph>
                                <Title>{'dimensions'} </Title>
                                <Paragraph> {detail.dimensions} </Paragraph>
                                <Title>{'Quantites'} </Title>
                                <Paragraph> {detail.quantities} </Paragraph>
                                <Title>{'Address'} </Title>
                                <Paragraph> {detail.address} </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button> edit </Button>
                                <Button> cancel  </Button>
                            </Card.Actions>

                        </Card>
                    </View>
                ))
            }

        </View>

    )
}


