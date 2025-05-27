import firestore from '@react-native-firebase/firestore';

// CREATE data
export const createData = async (col: string, dataData: any) => {
  try {
    const dataCollection = firestore().collection(col);

    const docRef = await dataCollection.add(dataData);
    return { id: docRef.id, ...dataData };
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

// READ all datas
export const getAlldatas = async (col: string) => {
  try {
    const dataCollection = firestore().collection(col);

    const snapshot = await dataCollection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting datas:', error);
    throw error;
  }
};

// READ one data by ID
export const getDataById = async (col: string, id: string) => {
  try {
    const dataCollection = firestore().collection(col);
    const doc: any = await dataCollection.doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      throw new Error('data not found');
    }
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

// UPDATE data by ID
export const updateData = async (id: string, updatedData: any, col: string) => {
  try {
    const dataCollection = firestore().collection(col);
    await dataCollection.doc(id).update(updatedData);
    return { id, ...updatedData };
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// DELETE data by ID
export const deleteData = async (id: string, col: string) => {
  try {
    const dataCollection = firestore().collection(col);
    await dataCollection.doc(id).delete();
    return { success: true };
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
