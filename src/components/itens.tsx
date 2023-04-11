import { Agenda } from "@/interfaces";
import { FC } from "react";
import { Inter } from 'next/font/google'
import styles from '@/app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

interface Props {
    items: Agenda[];
}

const ListAgenda: FC<Props> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <a
                    href="https://github.com/LuisHenrique01/agenda"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                >
                    <h2 className={inter.className}>
                        {item.name} <span>-&gt;</span>
                    </h2>
                    <p className={inter.className}>{item.description}</p>
                </a>
            ))}
        </>
    );
};

export default ListAgenda;
