import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useCallback } from 'react';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LocalStorage from '../../store/localStorage';
import { ITodo } from '../../types/todo';
import TodoAddModal from './TodoAddModal';

const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: true,
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = React.useState(LocalStorage.getItem('todos') || []);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleAddTodo = (todo: ITodo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    LocalStorage.setItem('todos', newTodos);
    setIsModalVisible(false);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(newTodos);
    LocalStorage.setItem('todos', newTodos);
  };

  //   const handleDone = (id: number) => {
  //     const newTodos = todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     );
  //     setTodos(newTodos);
  //     LocalStorage.setItem('todos', newTodos);
  //   };

  const renderRightActions = useCallback((id: number) => {
    return (
      <>
        {/* <TouchableOpacity style={styles.delBtn} onPress={() => handleDone(id)}>
          <Text style={{ color: 'white' }}>done</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => handleDelete(id)}
        >
          <Text style={{ color: 'white' }}>del</Text>
        </TouchableOpacity>
      </>
    );
  }, []);

  const renderItem: ListRenderItem<ITodo> = useCallback(
    ({ item }) => (
      <Swipeable renderRightActions={() => renderRightActions(item.id)}>
        <View style={styles.item}>
          <Text style={styles.todo_title}>{item.title}</Text>
          <Text>{item.completed ? 'Completed' : 'Not Completed'}</Text>
        </View>
      </Swipeable>
    ),
    [todos]
  );

  return (
    <View style={styles.constainer}>
      <TodoAddModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={handleAddTodo}
      />
      <FlashList
        ListHeaderComponent={() => (
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.title}>Todo app +</Text>
          </TouchableOpacity>
        )}
        data={todos}
        estimatedItemSize={50}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text style={styles.title}>No todos</Text>}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20,
  },

  todo_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },

  delBtn: {
    height: 70,
    width: 50,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#d07dd9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
