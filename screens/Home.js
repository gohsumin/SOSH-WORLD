import React, { Component, useState } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import UsersContext from "../data/UsersContext";
import PostsContext from "../data/PostsContext";
import FeedItem from './components/FeedItem';

const HomeScreen = () => {
  const user = "lex";

  const users = React.useContext(UsersContext).users;
  const feed = React.useContext(PostsContext).posts.filter((post) =>
    users[user].following.concat(user).includes(post.user)
  );

  const renderItem = ({ item }) => (
    <UsersContext.Consumer>
      {(context) => (
        <FeedItem
          pfpSource={context.users[item.user].pfpSource}
          firstName={context.users[item.user].firstName}
          lastName={context.users[item.user].lastName}
          title={item.title}
          imageURL={item.imageURL}
          likes={item.likes}
        />
      )}
    </UsersContext.Consumer>
  );

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "95%",
          backgroundColor: "#808080",
          opacity: 0.5,
          alignSelf: "flex-end",
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: "600",
            paddingTop: 30,
            paddingBottom: 20,
          }}
        >
          Home
        </Text>
        {renderSeparator()}
      </View>
    );
  };
  /* return for HomeScreen */
  return (
    <View style={styles.container}>
      <PostsContext.Consumer>
        {(context) => (
          <FlatList
            data={feed}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </PostsContext.Consumer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
    backgroundColor: "#050505",
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 0.2,
    marginTop: 10,
    marginRight: 10,
    alignItems: "center",
    resizeMode: "contain",
  },
});
