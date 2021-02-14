import { IonButton, IonInput, IonModal, IonPage, IonPicker, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState } from 'react';
import { ItemDoc } from '../Models/DocTypes';
import { ItemCategory } from '../Models/Enums';
import Item from '../Models/Item';

interface NewItemViewProps {
    isOpen: boolean;
    closeCallback: CallableFunction;
}

const NewItemView: React.FC<NewItemViewProps> = (props: NewItemViewProps) => {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<ItemCategory>(ItemCategory.Component);
    const [description, setDescription] = useState<string>('');
    const [imageURL, setImageURL] = useState<string>('');
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const handleSubmit = () => {
        const newItem: ItemDoc = {
            id: '123',
            name: name,
            category: category,
            description: description,
            imageUrl: imageURL,
            latitude: latitude,
            longitude: longitude,
            uid: '',
        };
        Item.addItem(newItem);
        setName('');
        setCategory(ItemCategory.Component);
        setDescription('');
        setImageURL('');
        alert('Item added!');
        props.closeCallback(false);
    };

    return (
        <IonModal isOpen={props.isOpen} onDidDismiss={() => props.closeCallback(false)}>
            <IonInput placeholder="Item name" type="text" onIonChange={(e) => setName(e.detail.value ?? '')} />
            <IonSelect
                value={category}
                okText="Okay"
                cancelText="Dismiss"
                placeholder="Part Category"
                onIonChange={(e) => setCategory(e.detail.value ?? ItemCategory.Component)}
            >
                {Object.keys(ItemCategory).map((v, k) => (
                    <IonSelectOption key={k} value={v}>
                        {v}
                    </IonSelectOption>
                ))}
            </IonSelect>
            <IonInput
                placeholder="Item description"
                type="email"
                onIonChange={(e) => setDescription(e.detail.value ?? '')}
            />
            <IonInput
                placeholder="Enter URL of image for item"
                type="email"
                onIonChange={(e) => setImageURL(e.detail.value ?? '')}
            />
            <IonButton onClick={() => handleSubmit()}>Submit</IonButton>
        </IonModal>
    );
};

export default NewItemView;
