package com.lagoon.backend.dao;

import com.lagoon.backend.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Le on 4/24/2016.
 */
@Repository
public interface CommentDao extends CrudRepository<Comment, Long> {
}
