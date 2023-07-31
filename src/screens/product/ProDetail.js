import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Group434 from '../../assets/images/Group434.svg';
import Group435 from '../../assets/images/Group435.svg';
import Group436 from '../../assets/images/Group436.svg';
import Group437 from '../../assets/images/Group437.svg';
import Avatar3 from '../../assets/images/Avatar3.svg';
import Lorem from '../../assets/images/Lorem.svg';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Disc from '../../components/Disc';
import Fonts from '../../components/Fonts';

function ProDetail(props) {
  const navigation = useNavigation();
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Group434 />
          </TouchableOpacity>
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
          backgroundColor: Colors.white,
          marginTop: -170,
          //   marginLeft: 16,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.bold,
            color: Colors.neutralBlack,
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
          <Disc originalPrice={50} discountPercentage={50} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 6,
          backgroundColor: Colors.white,
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
              fontFamily: Fonts.medium,
              color: Colors.neutralBlack,
            }}>
            Tradly Store
          </Text>
          <Text
            style={{
              color: Colors.white,
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
            backgroundColor: Colors.white,
            marginTop: 6,
            paddingTop: 60,
            paddingLeft: 16,
            paddingBottom: 10,
            // marginBottom: 10,
          }}>
          <Lorem />
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            paddingTop: 10,
            paddingBottom: 28,
          }}>
          <Button
            title="Add To Cart"
            screen={'MyCart'}
            navigation={navigation}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            marginTop: 6,
            paddingLeft: 20,
            paddingTop: 27,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: Colors.primary,
              justifyContent: 'space-between',
              //   marginHorizontal: 10,
            }}>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Condition
              </Text>
            </View>
            <View style={{width: '55%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Organic
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Price Type
              </Text>
            </View>
            <View style={{width: '55%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Fixed
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Category
              </Text>
            </View>
            <View style={{width: '55%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Beverages
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: '#000',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Location
              </Text>
            </View>
            <View style={{width: '55%'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.regular,
                  color: Colors.neutralBlack,
                }}>
                Kualalumpur Malaysia
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            marginTop: 6,
            paddingVertical: 20,
            paddingLeft: 24,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.semiBold,
              color: Colors.black,
            }}>
            Additional Detail
          </Text>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              // justifyContent: 'space-between',
              //   backgroundColor: '#000',
              height: 40,
            }}>
            <View style={{width: '35%'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.neutralBlack,
                  fontFamily: Fonts.light,
                }}>
                Delivery Detail
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                marginLeft: 20,
              }}>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  fontFamily: Fonts.medium,
                  color: Colors.neutralBlack,
                }}>
                Home Delivery Available, Cash On Delivery
              </Text>
            </View>
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
