import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateSelect = (props) => {

    const [startDate, setStartDate] = useState(Moment().format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(Moment().format('YYYY-MM-DD'));

    const [isStartVisible, setIsStartVisible] = useState(false);
    const [isEndVisible, setIsEndVisible] = useState(false);

    const ConfirmStart = (date) =>{
        setStartDate(Moment(date).format('YYYY-MM-DD'));
        setIsStartVisible(false);
        props.selectedStart(Moment(date).format('YYYY-MM-DD'));
    }

    const ConfirmEnd = (date) =>{
        setEndDate(Moment(date).format('YYYY-MM-DD'));
        setIsEndVisible(false);
        props.selectedEnd(Moment(date).format('YYYY-MM-DD'));
    }

    useEffect(() => {
        if(props.mydate){
            setStartDate(Moment(props.mydate.start).format('YYYY-MM-DD'));
            setEndDate(Moment(props.mydate.end).format('YYYY-MM-DD'));
        }
    }, [props])

    return (
        <View style={{flexDirection: "row", alignItems: 'center', width:'90%', justifyContent: 'center', height:50}}>
            <Text style={{ fontSize:15, color:'black', fontWeight:'bold', width:'20%'  }}>기간</Text>
            <View style={{flexDirection: "row", width:'78%', backgroundColor:'#E9E9E9', height:40, borderRadius: 20}}>
                <TouchableOpacity style={{width:'45%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 20, alignItems: 'center', justifyCotent:'center'}} onPress={()=>setIsStartVisible(true)}>
                    <Text style={{color:'black', marginTop:10}}>{startDate}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isStartVisible}
                    cancelTextIOS={"취소"}
                    confirmTextIOS={"확인"}
                    mode="date"
                    onConfirm={ConfirmStart}
                    onCancel={()=>setIsStartVisible(false)}
                />
                <Text style={{width:'10%', color:'black', marginTop:10}}>~</Text>
                <TouchableOpacity style={{width:'45%',color:'black', backgroundColor: '#E9E9E9', borderRadius: 20, alignItems: 'center', justifyCotent:'center'}} onPress={()=>setIsEndVisible(true)}>
                    <Text style={{color:'black', marginTop:10}}>{endDate}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isEndVisible}
                    cancelTextIOS={"취소"}
                    confirmTextIOS={"확인"}
                    mode="date"
                    onConfirm={ConfirmEnd}
                    onCancel={()=>setIsEndVisible(false)}
                />
            </View>
        </View>
    );
};
export default DateSelect;