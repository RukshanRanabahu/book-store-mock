import BookStoreCard from '@/components/cards/book-store-card';
import { Box, Typography } from '@mui/material';
import { useMyContext } from '../context/my-context';

export default function BookDetails() {
    const { selectedItem, setSelectedItem } = useMyContext();

    return (
        <div>
            <div>
                <Typography className="page-heading" variant="h3" >Book Details</Typography>
            </div>

            <div style={{ margin: '40px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    {selectedItem.title != '' &&
                        <BookStoreCard image={selectedItem.image} title={selectedItem.title} subtitle={selectedItem.subtitle} isbn13={selectedItem.isbn13} price={selectedItem.price} url={selectedItem.url} />
                    }
                </Box>
            </div>

        </div>
    )
}
