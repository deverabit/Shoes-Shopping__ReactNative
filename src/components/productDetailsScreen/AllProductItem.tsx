import {
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Box, Center, FlatList, Flex, Text, Image,Input} from 'native-base';
import {ProductData} from '../../data/shoesData';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";


const scrennWidth = Dimensions.get('screen').width;

const AllProductItem = () => {

  const navigation = useNavigation();

  const backButton = () => {
    navigation.goBack();
  }
  return (
    <Box>
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={2}>
        <Box
          p={2}
          borderWidth={1.5}
          borderColor={'#aeaeae'}
          rounded={'md'}
          m={1}>
          <TouchableOpacity
            onPress={backButton}
          >
            <Icon name="chevron-left" size={25} color={'#1E1E1E'} />
          </TouchableOpacity>
        </Box>

        <Box>
          <Text fontSize={22} fontWeight={'800'}>
            Cart
          </Text>
        </Box>
        <Box
          p={2}
          borderWidth={1.5}
          borderColor={'#aeaeae'}
          rounded={'md'}
          m={1}>
          <TouchableOpacity>
            <Icon name="location-pin" size={25} color={'#1E1E1E'} />
          </TouchableOpacity>
        </Box>
      </Flex>

      <Box m={6}>
        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          bg={'#d8d8d8'}
          rounded={'md'}>
          <Input
            w={{
              md: '10%',
            }}
            InputLeftElement={
              <Icon name="search" size={30} color={'#818181'} />
            }
            placeholderTextColor={'#7777773'}
            placeholder="Find something in your cart..."
          />
        </Flex>
      </Box>

      <Box width={scrennWidth - 1}>
        <FlatList
          horizontal={false}
          data={ProductData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Box
                m={2}
                p={3}
                flexDirection={'row'}
                borderBottomWidth={3}
                borderBottomColor={'#9f9f9f'}
                borderRadius={'1'}>
                <Box rounded="lg">
                  <TouchableWithoutFeedback onPress={() => console.log('')}>
                    <Image
                      h={100}
                      w={100}
                      opacity={0.8}
                      bg={'#5F5F5F'}
                      rounded={'md'}
                      resizeMode="contain"
                      source={{uri: item.imageUrl}}
                      alt="showes_image"
                    />
                  </TouchableWithoutFeedback>
                </Box>

                <Box ml={4}>
                  <Text bold fontSize={16} color={'#1E1E1E'}>
                    {item.title}
                  </Text>

                  <Text>{item.showsType}</Text>
                  <Flex
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'baseline'}>
                    <Flex flexDirection={'row'} alignItems={'baseline'}>
                      <Text fontWeight={'900'} fontSize={20} color={'#1E1E1E'}>
                        ₹{item.origilanPrice}
                      </Text>
                      <Text color={'#5F5F5F'} strikeThrough bold ml={'2'}>
                        ₹{item.discountPrice}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default AllProductItem;