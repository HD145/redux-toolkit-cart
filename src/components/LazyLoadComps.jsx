import { Box, CircularProgress, Grid } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import Products from './Products'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryComponent from './ErrorBoundary';

const ProductsComponent = lazy(() => import("./Products"))

const loadingComponent = (
    <Box
        sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <CircularProgress />
    </Box>
);

export const LazyLoadComps = () => {
    return (
        <>
            <Grid container sx={{ p: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at commodi officia quam doloribus, quidem vero neque, itaque enim sit accusamus quia voluptates esse provident rem? Maiores ipsa itaque commodi ipsum sunt. Rerum cumque quo amet, temporibus dolore consectetur fugit totam esse illum? Asperiores molestias ex dolorum exercitationem magnam laborum in at? Similique aperiam error facere cum incidunt amet illo eos maiores beatae cumque odit nam possimus, vero corporis velit ex officia, ratione obcaecati animi eaque. Soluta quos error nulla sapiente voluptas nam necessitatibus reprehenderit consequatur, non quasi provident quibusdam iusto rem numquam praesentium facilis culpa mollitia dolores eveniet excepturi totam animi. Repudiandae eius tempora impedit omnis, voluptatum esse doloribus velit distinctio exercitationem quas, veniam nam. Dignissimos, enim quidem ad eveniet iure sed cumque ratione quis libero exercitationem maiores dolore molestiae impedit animi quae soluta praesentium laborum adipisci repudiandae commodi corrupti accusantium! Recusandae nulla optio tempore blanditiis quis? Et quaerat distinctio porro officiis quibusdam maxime ab debitis ratione perspiciatis neque quasi nisi perferendis, vero culpa consequuntur, praesentium necessitatibus eos. Voluptatem hic veritatis quae facere enim tenetur iure aspernatur tempora exercitationem qui ut consequatur, perferendis error, sed minus, delectus officiis quaerat quasi voluptatum sit dolores harum molestiae. Quod in quas reiciendis vitae aperiam enim, similique odit optio quos excepturi nobis aliquid voluptas sunt repudiandae expedita voluptatem? Fugit nostrum, distinctio quam dolorem ea consequuntur iure, sint porro repellendus rerum amet? Dignissimos quasi alias ipsam aut dolore saepe, exercitationem beatae nihil cum harum maxime pariatur tempora, provident, laboriosam autem sapiente non. Expedita modi deserunt vero harum labore, dignissimos assumenda magni eaque beatae totam! Veniam voluptatum nostrum, reprehenderit error vero illum est, ea saepe et excepturi dignissimos totam ab deleniti. Perspiciatis accusamus molestias voluptates ipsa illum laudantium. Repudiandae sequi, expedita quia officia possimus iusto accusantium assumenda beatae dolores tempora fugiat. Tempore officiis ullam iste?
            </Grid>
            <Grid>
                <Suspense fallback={loadingComponent}>
                    <ErrorBoundary
                        fallbackRender={ErrorBoundaryComponent}
                        onReset={() => {
                            window.reload();
                        }}
                    >
                        <ProductsComponent lazyFlag={false} />
                    </ErrorBoundary>
                </Suspense>
            </Grid>
        </>
    )
}
