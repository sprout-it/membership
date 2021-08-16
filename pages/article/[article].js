import React from 'react'
import { useRouter } from 'next/router'
const Article = ({ params }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <>Is Loading</>
    }
    return (
        <div>
            {params.article}
        </div>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { article: '1' } }
        ],
        fallback: true
    }
}

export const getStaticProps = ({ params }) => {
    return { props: { params } }
}

export default Article
