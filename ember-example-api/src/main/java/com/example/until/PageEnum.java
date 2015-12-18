package com.example.until;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public enum PageEnum {
	PAGEABLE_SORT_BY_NAME{
		@Override
		public Pageable getPageable(int page) {
			return new PageRequest(PageUntil.getPage(page),  PageUntil.PAGE_DEFAULT, Sort.Direction.ASC, "name");
		}
	},
	
	PAGEABLE_SORT_BY_CREATE_DATE{
		@Override
		public Pageable getPageable(int page) {
			return new PageRequest(PageUntil.getPage(page),  PageUntil.PAGE_DEFAULT, Sort.Direction.DESC, "creatDate");
		}
	},
	
	PAGEABLE_SORT_BY_UPDATE_DATE{
		@Override
		public Pageable getPageable(int page) {
			return new PageRequest(PageUntil.getPage(page),  PageUntil.PAGE_DEFAULT, Sort.Direction.DESC, "updateDate");
		}
	};
	
	
	
	public abstract Pageable getPageable(int page);

}
