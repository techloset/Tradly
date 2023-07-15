import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Group434 from '../../assets/images/Group434.svg';
import Group435 from '../../assets/images/Group435.svg';
import Group436 from '../../assets/images/Group436.svg';
import Group437 from '../../assets/images/Group437.svg';
import Avatar3 from '../../assets/images/Avatar3.svg';
import Lorem from '../../assets/images/Lorem.svg';
import Button from '../../components/Button';

function ProDetail(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Rectangle54.png')}
        style={{
          height: '60%',
        }}>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            marginLeft: 12,
            justifyContent: 'space-between',
          }}>
          <Group434 />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
              width: '40%',
            }}>
            <Group435 />
            <Group436 />
            <Group437 />
          </View>
        </View>
        <View
          style={{
            width: '15%',
            height: 10,
            position: 'absolute',
            top: 240,
            left: 150,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: Colors.primary,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: Colors.grey,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: Colors.grey,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: Colors.grey,
            }}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: -170,
          //   marginLeft: 16,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            color: '#4F4F4F',
            marginTop: 16,
            marginLeft: 16,
          }}>
          Coca Cola
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 16,
            paddingBottom: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-Bold',
              color: '#33907C',
              //   marginTop: 10,
            }}>
            $25
          </Text>
          <Text>$50 50% off</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 6,
          backgroundColor: '#fff',
          paddingVertical: 28,
          paddingLeft: 16,
          alignItems: 'center',
        }}>
        <Avatar3 />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#000',
            width: '80%',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Montserrat-Medium',
              color: '#4F4F4F',
            }}>
            Tradly Store
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              backgroundColor: Colors.primary,
              width: '30%',
              textAlign: 'center',
              height: 24,
              borderRadius: 24,
            }}>
            Follow
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 6,
            paddingTop: 60,
            paddingLeft: 16,
            paddingBottom: 10,
            // marginBottom: 10,
          }}>
          <Lorem />
        </View>
        <View
          style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 28}}>
          <Button title="Add To Cart" />
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            marginTop: 6,
            paddingLeft: 16,
            paddingTop: 27,
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-around',
              //   marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Condition
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Organic
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Price Type
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Fixed
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Category
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Beverages
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-around',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Location
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#4F4F4F',
              }}>
              Kualalumpur Malaysia
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 6,
            paddingVertical: 20,
            paddingLeft: 24,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
              color: '#000000',
            }}>
            Additional Detail
          </Text>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              //   justifyContent: 'space-between',
              //   backgroundColor: '#000',
              height: 40,
            }}>
            <Text>Delivery Detail</Text>
            <Text style={{textAlign: 'justify'}}>
              Home Delivery Available, Cash On Delivery
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.grey, flex: 1},
});
export default ProDetail;
