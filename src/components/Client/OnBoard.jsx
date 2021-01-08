import React from 'react'
import ClientJobPost from './JobPost/ClientJobPost'
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const OnBoard = () => {
    return (
        <>
            <div style={{ width: '50%', margin: ' 5em auto' }}>
                <ClientJobPost 
                    onBoard={true}
                />
            </div>
        </>
    )
}

export default OnBoard
